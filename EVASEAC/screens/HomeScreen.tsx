import { StatusBar } from 'expo-status-bar';
import { Button, Text, View } from 'react-native';
import NavProps from '../interfaces/Navigation';
import Styles from '../styles/Common';

export default function HomeScreen(props: NavProps) {
    return (
      <View style={Styles.container}>
        <Text>Home screen</Text>
        <StatusBar style="auto" />
      </View>
    );
  };