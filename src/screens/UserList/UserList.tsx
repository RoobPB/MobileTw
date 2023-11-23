import React, { useEffect, useState, useMemo } from 'react';
import { View, Text, FlatList, Button, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { db } from '../../../firebase-config';
import { collection, getDocs, deleteDoc, doc, where, query } from 'firebase/firestore';
import { styles } from './UserListStyles';
import UserItem from '../UserItem/UserItem';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation();

  const fetchUsers = async () => {
    setRefreshing(true);
    const querySnapshot = await getDocs(collection(db, 'users'));
    const fetchedUsers = querySnapshot.docs.map(doc => {
      return { id: doc.id, ...doc.data() };
    });
    setUsers(fetchedUsers);
    setRefreshing(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleEditPress = (user) => {
    navigation.navigate('UserForm', { user });
    console.log('Edit button pressed for:', user);
  };

  const handlePressUser = (username) => {
    navigation.navigate('Login', { username });
  };

  const handleDeleteUser = async (userId, firstName) => {
    try {
      await deleteUserPosts(firstName);
      await deleteDoc(doc(db, 'users', userId));
      console.log('User deleted with ID:', userId);
      fetchUsers();
    } catch (error) {
      console.error('Error removing user and their posts: ', error);
    }
  };


  const deleteUserPosts = async (firstName) => {
    const postsRef = collection(db, 'posts');
    const q = query(postsRef, where('createdBy', '==', firstName));
    const querySnapshot = await getDocs(q);
    const deletePromises = querySnapshot.docs.map((doc) => deleteDoc(doc.ref));
    await Promise.all(deletePromises);
  };

  const sortedUsers = useMemo(() => {
    return [...users].sort((a, b) => a.firstName.localeCompare(b.firstName));
}, [users]);



const [selectedUsers, setSelectedUsers] = useState(new Set());

  const handleSelect = (userId, isSelected) => {
    setSelectedUsers(prevSelected => {
      const newSet = new Set(prevSelected);
      if (isSelected) {
        newSet.add(userId);
      } else {
        newSet.delete(userId);
      }
      return newSet;
    });
  };

  const handleBulkDelete = async () => {
    await Promise.all(Array.from(selectedUsers).map(userId => deleteDoc(doc(db, 'users', userId))));
    setSelectedUsers(new Set());
    fetchUsers();
  };


  return (
    <ImageBackground
        source={require('../../../image/alley.jpg')}
        style={styles.backgroundImage}>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Refresh" onPress={fetchUsers} disabled={refreshing} />
      {selectedUsers.size > 0 && (
        <Button title="Bulk Delete" onPress={handleBulkDelete} />
      )}
      <FlatList
        data={sortedUsers} //data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <UserItem user={item} onSelect={handleSelect} />
            <TouchableOpacity onPress={() => handlePressUser(item.firstName)}>
              <Text style={styles.itemText}>First Name: {item.firstName}</Text>
              <Text style={styles.itemText}>Last Name: {item.lastName}</Text>
            </TouchableOpacity>
            <Button title="Edit" onPress={() => handleEditPress(item)} />
            <Button title="Delete" onPress={() => handleDeleteUser(item.id, item.firstName)} />
          </View>
        )}
        refreshing={refreshing}
        onRefresh={fetchUsers}
      />
    </View>
    </ImageBackground>
  );
};

export default UserList;
