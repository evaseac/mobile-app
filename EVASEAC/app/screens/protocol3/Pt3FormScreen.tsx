import { NavigationProp } from "@react-navigation/native";
import { StyleSheet, Text, View } from 'react-native';

interface Pt3FormProps {
    navigation : NavigationProp<any, any>;
}

const Pt3FormScreen = (props:Pt3FormProps) => {
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
});

export default Pt3FormScreen;