import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import styles from "./styles/styles"
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "./components/LoginScreen";
import RegisterScreen from "./components/RegisterScreen";
import HomeScreen from './components/HomeScreen';
import AddChatScreen from './components/AddChatScreen';
import ChatScreen from './components/ChatScreen';

const Stack = createStackNavigator();

const globalScreenOptions = {
  headerStyle: { backgroundColor: "#2C68ED" },
  headerTitleStyle: { color: "white" },
  headerTintColor: "white"
};

export default function App() {
  return (
    <NavigationContainer styles={styles.container}>
      <Stack.Navigator initialRouteName='Home' screenOptions={globalScreenOptions}>
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Register' component={RegisterScreen} />
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='AddChat' component={AddChatScreen} />
        <Stack.Screen name='Chat' component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}