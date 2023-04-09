import {StyleSheet, Text, View} from 'react-native';

interface CreateSitiosProps {
  navigation: any;
}

const CreateSitesScreen = (props: CreateSitiosProps) => {
  const home = () => {
    props.navigation.navigate('home');
  };
  return (
    <View style={styles.container}>
      <Text>Hello world!</Text>
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

export default CreateSitesScreen;
