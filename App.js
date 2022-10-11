import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ToastAndroid, View } from 'react-native';
import ActivateAccount from './screens/ActivateAccount';
import ChatScreen from './screens/ChatScreen';
import AddContact from './screens/AddContact';
import AddPerson from './components/AddPerson'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Register from './screens/Register';
import PrivateChat from './components/PrivateChat';
import Edit from './screens/Edit';
import { useState } from 'react';
import ViewMessage from './components/ViewMessage';
import Login from './screens/Login';

export default function App() {
  const Stack = createStackNavigator();
  const isuser = false;
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
        name='Register'
        component={Register}
        options={{
          headerShown: false,
        }}
        />
        <Stack.Screen 
        name='ActivateAccount'
        component={ActivateAccount}
        options={{
          headerShown: false,
        }}
        />
        <Stack.Screen 
        name='Login'
        component={Login}
        options={{
          headerShown: false,
        }}
        />
        <Stack.Screen 
        name='ChatScreen'
        component={ChatScreen}
        options={{
          headerShown: false,
        }}
        />
        <Stack.Screen 
        name='Edit'
        component={Edit}
        options={{
          headerShown: false,
        }}
        />
        <Stack.Screen 
        name='PrivateChat'
        component={PrivateChat}
        options={{
          headerShown: false,
        }}
        />
        <Stack.Screen 
        name='AddPerson'
        component={AddPerson}
        options={{
          headerShown: false,
        }}
        />
        <Stack.Screen 
        name='AddContact'
        component={AddContact}
        options={{
          headerShown: false,
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    {/* <AddPerson /> */}
    </>
  );
}