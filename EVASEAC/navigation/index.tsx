import * as React from 'react';

import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ColorSchemeName } from 'react-native';

import { RootStackParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

import LogInScreen from '../screens/LogInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName}) {
  return (
    <NavigationContainer
        linking={LinkingConfiguration}
        theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme} >
        <RootNavigator />
    </NavigationContainer>
  );
}

function RootNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='LogIn'
                component={LogInScreen} />
            <Stack.Screen
                name='SignUp'
                component={SignUpScreen} />
            <Stack.Screen
                name='Home'
                component={HomeScreen} />
        </Stack.Navigator>
    );
}