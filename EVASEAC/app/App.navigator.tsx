import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const { Navigator, Screen } = createNativeStackNavigator();

import HomeScreen from "./screens/HomeScreen";
import SignUpScreen from "./screens/SignUpScreen";
import LoginScreen from "./screens/LoginScreen";
import Protocolo1Screen from "./screens/protocolo1/Protocolo1Screen";
import Protocolo2MainScreen from "./screens/protocolo2/Protocolo2MainScreen";
import Pt2CondicionesScreen from "./screens/protocolo2/Pt2CondicionesScreen";
import SitiosScreen from "./screens/sitios/SitiosScreen";
import CreateSitiosScreen from "./screens/sitios/CreateSitiosScreen";
import Protocolo3Screen from "./screens/protocolo3/Protocolo3Screen";
import Protocolo4Screen from "./screens/protocolo4/Protocolo4Screen";

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
            <Screen name="protocolo1" component={Protocolo1Screen}></Screen>
            <Screen name="protocolo2" component={Protocolo2MainScreen}></Screen>
            <Screen name="protocolo3" component={Protocolo3Screen}></Screen>
            <Screen name="protocolo4" component={Protocolo4Screen}></Screen>
            <Screen name="pt2-condiciones-climaticas" component={Pt2CondicionesScreen}></Screen>
            <Screen name="sitios" component={SitiosScreen}></Screen>
            <Screen name="create-site" component={CreateSitiosScreen}></Screen>
        </Navigator>
    </NavigationContainer>
);

export default AppNavigator;