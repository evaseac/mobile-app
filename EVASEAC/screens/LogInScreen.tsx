import { StatusBar } from 'expo-status-bar';
import { Button, Text, View } from 'react-native';
import NavProps from '../interfaces/Navigation';
import Styles from '../styles/Common';

export default function LogInScreen(props: NavProps) {
    return (
        <View style={Styles.container}>
            <StatusBar style="auto" />
            <Text>SplashScreen/LogIn screen</Text>
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