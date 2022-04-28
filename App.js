// In App.js in a new project

import * as React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import Login from './src/Screen/Login';
// import profile from './src/Screen/profile';
import COLORS from './src/Screen/conts/colors';
import HomeScreen from './src/Screen/view/screens/HomeScreen';
import DetailsScreen from './src/Screen/view/screens/DetailsScreen';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle='dark-content' backgroundColor={COLORS.dark} />
      <Stack.Navigator screenOptions={{header:() => null}}>
        <Stack.Screen name='HomeScreen' component={HomeScreen}/>
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;