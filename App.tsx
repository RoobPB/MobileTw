import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider,} from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { store } from './src/store/store';
import UserForm from './src/screens/UserForm/UserForm';
import UserList from './src/screens/UserList/UserList';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';
import PostForm from './src/screens/PostForm/PostForm';
import PostList from './src/screens/PostList/PostList';
import Ionicons from 'react-native-vector-icons/Ionicons';


  const Tab = createBottomTabNavigator();


  export default function App() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                switch (route.name) {
                    case 'Posts':
                      iconName = focused ? 'ios-list' : 'ios-list-outline';
                      break;
                    case 'UserForm':
                      iconName = focused ? 'person-add' : 'person-add-outline';
                      break;
                    case 'UserList':
                      iconName = focused ? 'people' : 'people-outline';
                      break;
                    case 'Login':
                      iconName = focused ? 'log-in' : 'log-in-outline';
                      break;
                    case 'Create Post':
                      iconName = focused ? 'create' : 'create-outline';
                      break;
                  }

                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: 'blue',
              tabBarInactiveTintColor: 'gray',
            })}
          >
            <Tab.Screen name="Posts" component={PostList} />
            <Tab.Screen name="UserForm" component={UserForm} />
            <Tab.Screen name="UserList" component={UserList} options={{ title: 'User List' }} />
            <Tab.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
            <Tab.Screen name="Create Post" component={PostForm} />
          </Tab.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
