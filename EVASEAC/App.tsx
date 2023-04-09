import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogInScreen from './components/LogIn';
import SignUpScreen from './components/SignUp';
import HomeScreen from './components/Home';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='LogIn'
          component={LogInScreen}
        />
        <Stack.Screen
          name='SignUp'
          component={SignUpScreen}
        />
        <Stack.Screen
          name='Home'
          component={HomeScreen}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
