import { Pressable, FlatList, StyleSheet, Text, View, Alert } from 'react-native';

interface Protocol3Props {
    navigation : any;
}

const Protocol3Screen = (props:Protocol3Props) => {
    const home = () => {
        props.navigation.navigate("home")
    }
    return (
        <View style={styles.container}>
            <View style={styles.text}>
                <Text>Escoja una opción</Text>
            </View>
            <Pressable style={styles.mainButtons} onPress={() => Alert.alert('alto')}>
                <View style={styles.textButton}>
                    <Text style={styles.titleButton}>Gradiente alto</Text>
                    <Text style={styles.hintButton}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae atque possimus nesciunt sed ab, autem ex repellendus quis suscipit dolor, nihil placeat amet quos hic. Ullam harum deserunt quis molestias.</Text>
                </View>
            </Pressable>
            <Pressable style={styles.mainButtons} onPress={() => Alert.alert('bajo')}>
                <View style={styles.textButton}>
                    <Text style={styles.titleButton}>Gradiente bajo</Text>
                    <Text style={styles.hintButton}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae atque possimus nesciunt sed ab, autem ex repellendus quis suscipit dolor, nihil placeat amet quos hic. Ullam harum deserunt quis molestias.</Text>
                </View>
            </Pressable>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    text: {
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      padding: 20,
    },
    mainButtons: {
        margin: 10,
        padding: 10,
        borderRadius: 15,
        backgroundColor: '#275DAD',
        justifyContent: 'center', // TODO: doesn't work
    },
    textButton: {
        // TODO: might delete this
    },
    titleButton: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
        justifyContent: 'center',
    },
    hintButton: {
        color: '#f6f6f6',
        justifyContent: 'center',
    },
});

export default Protocol3Screen;