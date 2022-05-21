import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreenComponent';
import SignUpScreen from './components/SignUpScreenComponent';
//TODO: watch "official" name conventions for components, controllers, etc; I do remember Controllers are sufixed with the Controller word, ex.: HomeController.tsx -> for home controller
export default function App() {
  return (
    // TODO: use NavigationContainer for HomeScreeen, SignUpScreen; see: https://reactnative.dev/docs/navigation
    <View style={styles.container}> 
      <Text>Log in screen</Text>
      <Button
        title='HOME'
      />
      <Button
        title='SIGN UP'
      />
      <StatusBar style="auto" />
    </View>
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
