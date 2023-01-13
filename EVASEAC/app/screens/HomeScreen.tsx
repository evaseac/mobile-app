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
            <Button onPress={() => navigateTo("Protocol1")} title="Protocol1">Protocol 1</Button>
            <Button onPress={() => navigateTo("Protocol2")} title="Protocol2">Protocol 2</Button>
            <Button onPress={() => navigateTo("Protocol3")} title="Protocol3">Protocol 3</Button>
            <Button onPress={() => navigateTo("Protocol4")} title="Protocol4">Protocol 4</Button>
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