import {Button, StyleSheet, Text, View} from 'react-native';

interface Pt2ConditionsProps {
  navigation: any;
}

const Pt2ConditionsScreen = (props: Pt2ConditionsProps) => {
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
      <Text>Resuelva el siguiente formulario</Text>
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

export default Pt2ConditionsScreen;
