import {Button, StyleSheet, Text, View} from 'react-native';

interface SitiosProps {
  navigation: any;
}

const SitesScreen = (props: SitiosProps) => {
  const home = () => {
    props.navigation.navigate('home');
  };
  const create = () => {
    props.navigation.navigate('create-site');
  };
  return (
    <View style={styles.container}>
      <Button title="create" onPress={create}>
        Crear nuevo
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
});

export default SitesScreen;
