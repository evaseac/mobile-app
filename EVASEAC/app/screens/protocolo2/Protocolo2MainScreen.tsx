import { Button, StyleSheet, Text, View } from 'react-native';

interface Protocolo2MainProps {
    navigation : any;
}

const Protocolo2MainScreen = (props:Protocolo2MainProps) => {
    const home = () => {
        props.navigation.navigate("home")
    }
    const condiciones_climaticas = () => {
        props.navigation.navigate("pt2-condiciones-climaticas")
    }
    const caracteristicas = () => {
        props.navigation.navigate("pt2-caracteristicas-agua")
    }
    return (
        <View style={styles.container}>
            <Text>Verifique que se cuentan con los siguientes materiales</Text>
            <Button title='condiciones-climaticas' onPress={condiciones_climaticas}>Condiciones climáticas</Button>
            <Button title='caracteristicas-agua' onPress={condiciones_climaticas}>Caracteristicas agua</Button>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 40,
    },
    item : {
        padding: 5,
        fontSize: 15,
        height: 30,
        alignContent: 'center',
    },
});

export default Protocolo2MainScreen;