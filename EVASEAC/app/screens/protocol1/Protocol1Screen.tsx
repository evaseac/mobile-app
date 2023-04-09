import {FlatList, StyleSheet, Text, View} from 'react-native';

interface Protocol1Props {
  navigation: any;
}

const Protocol1Screen = (props: Protocol1Props) => {
  const home = () => {
    props.navigation.navigate('home');
  };
  return (
    <View style={styles.container}>
      <Text>Verifique que se cuentan con los siguientes materiales</Text>
      <FlatList
        data={[{key: 'Objeto 1'}, {key: 'Objeto 2'}, {key: 'Objeto 3'}]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
  item: {
    padding: 5,
    fontSize: 15,
    height: 30,
    alignContent: 'center',
  },
});

export default Protocol1Screen;
