import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, ImageBackground } from 'react-native';
import { db } from '../../../firebase-config'
import { collection, addDoc, doc, updateDoc } from 'firebase/firestore';
import { styles } from './UserFormStyles';


const UserForm = ({ route }) => {
    const [firstName, setFirstName] = useState(route?.params?.user?.firstName || '');
    const [lastName, setLastName] = useState(route?.params?.user?.lastName || '');

    const handleSubmit = async () => {
        if (route?.params?.user) {
          const userRef = doc(db, 'users', route.params.user.id);
          try {
            await updateDoc(userRef, {
              firstName,
              lastName,
            });
            console.log('User updated with ID: ', route.params.user.id);
          } catch (e) {
            console.error('Error updating user: ', e);
          }
        } else {
          try {
            const docRef = await addDoc(collection(db, 'users'), {
              firstName,
              lastName,
            });
            console.log('Document written with ID: ', docRef.id);
          } catch (e) {
            console.error('Error adding document: ', e);
          }
        }
      };

  return (

    <ImageBackground
      source={require('../../../image/Letter.jpg')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
    <View style={styles.container}>
    <Text style={styles.title}>Create User</Text>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={firstName}
        placeholderTextColor='white'
        onChangeText={setFirstName}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        placeholderTextColor='white'
        value={lastName}
        onChangeText={setLastName}
      />
      <TouchableOpacity style={styles.buttonContainer} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
    </ImageBackground>
  );
};

export default UserForm;
