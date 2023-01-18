import { FlatList, StyleSheet, Text, View } from 'react-native';

interface Protocol3Props {
    navigation : any;
}

const Protocol3Screen = (props:Protocol3Props) => {
    const home = () => {
        props.navigation.navigate("home")
    }
    return (
        <View style={styles.container}>
            <Text>Hello world!</Text>
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

export default Protocol3Screen;