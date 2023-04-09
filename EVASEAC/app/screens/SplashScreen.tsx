import {TouchableOpacity, StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect} from 'react';
import Constants from 'expo-constants';

interface SplashScreenProps {
  navigation: any;
}

const SplashScreen = (props: SplashScreenProps) => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('login');
    }, 2000);
  }, [props.navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../../assets/ipn.png')} />
        <Image style={styles.image} source={require('../../assets/encb.png')} />
        <Image
          style={styles.image}
          source={require('../../assets/logo_concurso.png')}
        />
        <Image
          style={styles.image}
          source={require('../../assets/escom.png')}
        />
      </View>
      <Text style={styles.text}>Evaseac 1.0</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    flex: 1,
    margin: 10,
    resizeMode: 'center',
  },

  imageContainer: {
    marginTop: Constants.statusBarHeight,
    justifyContent: 'center',
    alignItems: 'center',
    height: '70%',
  },

  text: {
    color: '#9c9696',
    fontSize: 30,
  },
});

export default SplashScreen;
