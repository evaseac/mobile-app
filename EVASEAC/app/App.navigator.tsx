import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const { Navigator, Screen } = createNativeStackNavigator();

import HomeScreen from "./screens/HomeScreen";
import SignUpScreen from "./screens/SignUpScreen";

const AppNavigator = () => (
    <NavigationContainer>
        <Navigator 
            screenOptions={{
                headerShown : false
            }} initialRouteName="login"
        >
            <Screen name="login" component={SignUpScreen}></Screen>
            <Screen name="home" component={HomeScreen}></Screen>
        </Navigator>
    </NavigationContainer>
);

export default AppNavigator;