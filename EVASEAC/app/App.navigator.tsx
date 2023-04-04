import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

const {Navigator, Screen} = createNativeStackNavigator();

import HomeScreen from './screens/HomeScreen';
import SignUpScreen from './screens/SignUpScreen';
import LoginScreen from './screens/LoginScreen';
import Protocol1Screen from './screens/protocol1/Protocol1Screen';
import Protocol2MainScreen from './screens/protocol2/Protocol2MainScreen';
import Pt2ConditionsScreen from './screens/protocol2/Pt2ConditionsScreen';
import SitesScreen from './screens/sites/SitesScreen';
import CreateSitesScreen from './screens/sites/CreateSitesScreen';
import Protocol3Screen from './screens/protocol3/Protocol3Screen';
import Protocol4Screen from './screens/protocol4/Protocol4Screen';
import Pt3FormScreen from './screens/protocol3/Pt3FormScreen';
import SplashScreen from './screens/SplashScreen';

const AppNavigator = () => (
  <NavigationContainer>
    <Navigator initialRouteName="splash">
      <Screen
        name="splash"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Screen
        name="login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Screen name="home" component={HomeScreen} options={{title: 'Inicio'}} />
      <Screen
        name="signup"
        component={SignUpScreen}
        options={{title: 'Registro'}}
      />
      <Screen name="Protocol1" component={Protocol1Screen} />
      <Screen name="Protocol2" component={Protocol2MainScreen} />
      <Screen
        name="Protocol3"
        component={Protocol3Screen}
        options={{headerShown: true, title: 'Protocolo 3'}}
      />
      <Screen name="Protocol4" component={Protocol4Screen} />
      <Screen name="pt2-climate-conditions" component={Pt2ConditionsScreen} />
      <Screen
        name="pt3-form"
        component={Pt3FormScreen}
        options={{headerShown: true, title: 'Protocolo 3'}}
      />
      <Screen name="sitios" component={SitesScreen} />
      <Screen name="create-site" component={CreateSitesScreen} />
    </Navigator>
  </NavigationContainer>
);

export default AppNavigator;
