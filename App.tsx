import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider, useSelector } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from '@rneui/base';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { store } from './src/store/store';
import { selectLoggedInAs } from './src/store/slices/authSlice';
import UserForm from './src/screens/UserForm/UserForm';
import UserList from './src/screens/UserList/UserList';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';
import PostForm from './src/screens/PostForm/PostForm';
import PostList from './src/screens/PostList/PostList';



function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      </View>
    );
}

  function DetailsScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }

  // const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  /*const NavigationWrapper = () => {
    const loggedInAs = useSelector((state: any) => state.auth.loggedInAs)
  }*/


export default function App() {

  //const loggedInUsername = useSelector(selectLoggedInAs) ... loggedInUsername ||

  return (
    <Provider store={store}>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Posts" component={PostList} />
        <Tab.Screen name="UserForm" component={UserForm} />
        <Tab.Screen name="UserList" component={UserList} options={{ title: 'User List' }}/>
        <Tab.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
        <Tab.Screen name="Create Post" component={PostForm} />
        
      </Tab.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
