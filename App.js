// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/Screen/Login';
import profile from './src/Screen/profile';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
       
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name="profile" component={profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;