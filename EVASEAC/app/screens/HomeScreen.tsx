import { Button, StyleSheet, Text, View } from 'react-native';

interface HomeScreenProps {
    navigation : any
}

const HomeScreen = (props:HomeScreenProps) => {
    const navigateTo = (screen : string) => {
        props.navigation.navigate(screen);
    }
    return (
        <View style={styles.container}>
            <Text>Home!</Text>
            <Button onPress={() => navigateTo("protocolo1")} title="protocolo1">Protocolo 1</Button>
            <Button onPress={() => navigateTo("protocolo2")} title="protocolo2">Protocolo 2</Button>
            <Button onPress={() => navigateTo("protocolo3")} title="protocolo3">Protocolo 3</Button>
            <Button onPress={() => navigateTo("protocolo4")} title="protocolo4">Protocolo 4</Button>
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


export default HomeScreen;