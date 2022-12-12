import { useLinkProps } from "@react-navigation/native";
import { Button, StyleSheet, Text, View } from "react-native";

interface LoginScreenProps {
    navigation : any;
}

const LoginScreen = (props : LoginScreenProps) => {
    const signUp = () => {
       props.navigation.navigate("signup") 
    } 
    const login = () => {
        props.navigation.navigate("home")
    }
    return (
        <View style={styles.container}>
            <Text>Login</Text>
            <Button title="signup" onPress={signUp}>Sign Up</Button>
            <Button title="login" onPress={login}>Login</Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
})
export default LoginScreen;