import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import NavProps from '../interfaces/Navigation';
import Styles from '../styles/Common';

export default function SignUpScreen (props: NavProps) {
    return (
      <View style={Styles.container}>
        <StatusBar style="auto" />
        <Text>Sign Up screen</Text>
      </View>
    );
};