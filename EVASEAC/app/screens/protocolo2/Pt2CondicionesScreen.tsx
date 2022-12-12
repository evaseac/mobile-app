import { Button, StyleSheet, Text, View } from 'react-native';

interface Pt2CondicionesProps {
    navigation : any;
}

const Pt2CondicionesScreen = (props:Pt2CondicionesProps) => {
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
            <Text>Resuelva el siguiente formulario</Text>
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

export default Pt2CondicionesScreen;