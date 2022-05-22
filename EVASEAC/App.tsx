import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

type RootStackParamList = {

  Pdp: undefined; //current screen

  SignUp: undefined; // don't pass any props to it

  Home: undefined;

  // see: https://stackoverflow.com/questions/47924501/add-strong-typing-for-react-navigation-props
};

interface NavProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Pdp'>;
}

const LogInScreen = (props: NavProps) => {
  return (
    <View style={styles.container}>
      <Text>SplashScreen/LogIn screen</Text>
      <StatusBar style="auto" />
      <Button
        title='Sign Up'
        onPress={() => props.navigation.navigate('SignUp')}
      />
      <Button
        title='Home'
        onPress={() => props.navigation.navigate('Home')}
      />
    </View>
  );
};

const SignUpScreen = (props: NavProps) => {
  return (
    <View style={styles.container}>
      <Text>Sign Up screen</Text>
      <StatusBar style="auto" />
    </View>
  );
};

const HomeScreen = (props: NavProps) => {
  return (
    <View style={styles.container}>
      <Text>Home screen</Text>
      <StatusBar style="auto" />
    </View>
  );
};