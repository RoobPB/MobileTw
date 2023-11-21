import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { db } from '../../../firebase-config';
import { collection, getDocs, deleteDoc, doc, where, query } from 'firebase/firestore';
import { styles } from './UserListStyles';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation();

  const fetchUsers = async () => {
    setRefreshing(true); // Start refreshing
    const querySnapshot = await getDocs(collection(db, 'users'));
    const fetchedUsers = querySnapshot.docs.map(doc => {
      return { id: doc.id, ...doc.data() };
    });
    setUsers(fetchedUsers);
    setRefreshing(false); // Stop refreshing
  };

  useEffect(() => {
    fetchUsers(); // Call fetchUsers when the component is mounted
  }, []);

  const handleEditPress = (user) => {
    navigation.navigate('UserForm', { user });
    console.log('Edit button pressed for:', user);
    // navigation.navigate('UserForm', { user });
  };

  const handlePressUser = (username) => {
    navigation.navigate('Login', { username });
  };

  const handleDeleteUser = async (userId) => {
    try {
      await deleteUserPosts(userId); // Radera användarens posts först
      await deleteDoc(doc(db, 'users', userId)); // Radera sedan användaren
      console.log('User deleted with ID:', userId);
      fetchUsers(); // Uppdatera användarlistan
    } catch (error) {
      console.error('Error removing user and their posts: ', error);
    }
  };

  const deleteUserPosts = async (userId) => {
    const postsRef = collection(db, 'posts');
    const q = query(postsRef, where('createdBy', '==', userId));
    const querySnapshot = await getDocs(q);
    const deletePromises = querySnapshot.docs.map((doc) => deleteDoc(doc.ref));
    await Promise.all(deletePromises);
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Refresh" onPress={fetchUsers} disabled={refreshing} />
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <TouchableOpacity onPress={() => handlePressUser(item.firstName)}>
              <Text style={styles.itemText}>First Name: {item.firstName}</Text>
              <Text style={styles.itemText}>Last Name: {item.lastName}</Text>
            </TouchableOpacity>
            <Button title="Edit" onPress={() => handleEditPress(item)} />
            <Button title="Delete" onPress={() => handleDeleteUser(item.id)} />
          </View>
        )}
        refreshing={refreshing}
        onRefresh={fetchUsers}
      />
    </View>
  );
};

export default UserList;
