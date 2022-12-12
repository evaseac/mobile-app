import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const { Navigator, Screen } = createNativeStackNavigator();

import HomeScreen from "./screens/HomeScreen";
import SignUpScreen from "./screens/SignUpScreen";
import LoginScreen from "./screens/LoginScreen";

const AppNavigator = () => (
    <NavigationContainer>
        <Navigator 
            screenOptions={{
                headerShown : false
            }} initialRouteName="login"
        >
            <Screen name="signup" component={SignUpScreen}></Screen>
            <Screen name="home" component={HomeScreen}></Screen>
            <Screen name="login" component={LoginScreen}></Screen>
        </Navigator>
    </NavigationContainer>
);

export default AppNavigator;