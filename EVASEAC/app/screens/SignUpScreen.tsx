import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
import { useFonts } from 'expo-font'
import { useState } from 'react'

interface SignUpScreenProps {
    navigation : any;
}

const SignUpScreen = (props:SignUpScreenProps) => {
    const home = () => {
        props.navigation.navigate("home")
    }

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [number, setNumber] = useState("")

    const [loaded] = useFonts({
        Helvetica : require("../../assets/fonts/Helvetica-Bold.ttf")
    })

    if(!loaded) {
        return null
    }

    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.titleText}>Registro</Text>
            </View>
            <Text> Nombre(s) </Text>
            <View style={styles.inputView} >
                <TextInput
                    style={styles.TextInput}
                    placeholder = "Ingrese su(s) nombre(s)"
                    placeholderTextColor = "#808080"
                    onChange={(name) => setName(name)}
                />
            </View>
            <Text> Apellido(s) </Text>
            <View style={styles.inputView} >
                <TextInput
                    style={styles.TextInput}
                    placeholder = "Ingrese su(s) apellido(s)"
                    placeholderTextColor = "#808080"
                    onChange={(surname) => setSurname(surname)}
                />
            </View>
            <Text> Correo electrónico </Text>
            <View style={styles.inputView} >
                <TextInput
                    style={styles.TextInput}
                    placeholder = "Ingrese su correo"
                    placeholderTextColor = "#808080"
                    onChange={(email) => setEmail(email)}
                />
            </View>
                
            <Text> Número </Text>
            <View style={styles.inputView} >
                <TextInput
                    style={styles.TextInput}
                    placeholder = "Ingrese su número"
                    placeholderTextColor = "#808080"
                    keyboardType='numeric'
                    onChange={(email) => setEmail(email)}
                />
            </View>
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

    TextInput: {
        height: 100,
        flex: 1,
        width: "100%",
        padding: 10,
        marginLeft: 10,
        borderWidth: 1,
        borderColor: "transparent",
    },

    title: {
        position: 'absolute',
        top: 0,
        marginTop: 40,
        marginBottom: 30,
    },

    titleText: {
        flex: 1,
        marginBottom: 10,
        fontSize: 50,
        fontWeight: 'bold',
        fontFamily: 'Helvetica',
    },

    inputView: {
        backgroundColor: "#0001",
        borderColor: "#0F1110",
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "flex-start",
    },
});

export default SignUpScreen;