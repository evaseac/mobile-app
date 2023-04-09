import {Button, StyleSheet, Text, View} from 'react-native';

interface Protocol2MainProps {
  navigation: any;
}

const Protocol2MainScreen = (props: Protocol2MainProps) => {
  const home = () => {
    props.navigation.navigate('home');
  };
  const climate_conditions = () => {
    props.navigation.navigate('pt2-climate-conditions');
  };
  const characteristics = () => {
    props.navigation.navigate('pt2-characteristics-water');
  };
  return (
    <View style={styles.container}>
      <Text>Verifique que se cuentan con los siguientes materiales</Text>
      <Button title="Conditions-climaticas" onPress={climate_conditions}>
        Conditions climáticas
      </Button>
      <Button title="characteristics-water" onPress={climate_conditions}>
        characteristics water
      </Button>
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

export default Protocol2MainScreen;
