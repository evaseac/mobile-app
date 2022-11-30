import { Button, StyleSheet, Text, View } from 'react-native';

interface SignUpScreenProps {
    navigation : any;
}

const SignUpScreen = (props:SignUpScreenProps) => {
    const home = () => {
        props.navigation.navigate("home")
    }
    return (
        <View style={styles.container}>
            <Text>Sign Up z!</Text>
            <Button title='Something' onPress={home}>Go home</Button>
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

export default SignUpScreen;