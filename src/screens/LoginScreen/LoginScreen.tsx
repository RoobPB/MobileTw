import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Alert, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout, selectLoggedInAs } from '../../../src/store/slices/authSlice';
import { styles } from '../LoginScreen/LoginScreenStyles';
import { ImageBackground } from 'react-native';

const LoginScreen = ({ route }) => {
  const [inputUsername, setInputUsername] = useState('');
  const loggedInAs = useSelector(selectLoggedInAs);
  const dispatch = useDispatch();

  useEffect(() => {
    if (route.params?.username && !loggedInAs) {
      setInputUsername(route.params.username);
    }
  }, [route.params?.username, loggedInAs]);

  const handleLogin = () => {
    if (!loggedInAs) {
      dispatch(login(inputUsername));
      Alert.alert('Inloggning', `Du har loggats in som ${inputUsername}`);
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    setInputUsername('');
  };

  return (
    <ImageBackground
      source={require( '../../../image/train.jpg' )}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
    <View style={styles.container}>
      {loggedInAs ? (
        <>
          <Text style={styles.loggedInText}>Inloggad som {loggedInAs || '' }</Text>
          <Button title="Logga ut" onPress={handleLogout} />
        </>
      ) : (
        <>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={inputUsername}
            onChangeText={setInputUsername}
            autoCapitalize="none"

          />
          <Button title="Login" onPress={handleLogin} />
        </>
      )}
    </View>
    </ImageBackground>
  );
};

export default LoginScreen;
