import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ImageBackground,
  BackHandler,
} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import {useFonts} from 'expo-font';
import {useEffect} from 'react';

interface LoginScreenProps {
  navigation: any;
}

const LoginScreen = (props: LoginScreenProps) => {
  const [loaded] = useFonts({
    Helvetica: require('../../assets/fonts/Helvetica-Bold.ttf'),
  });

  const home = () => {
    props.navigation.navigate('home');
  };

  const signup = () => {
    props.navigation.navigate('signup');
  };

  useEffect(() => {
    const backAction = () => {
      BackHandler.exitApp();
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require('../../assets/beetle.png')}>
        <StatusBar style="auto" />
        <Text style={styles.text}>Iniciar</Text>
        <View style={styles.inputView}>
          <TextInput
            style={[styles.TextInput]}
            placeholder="Ingrese su correo"
            placeholderTextColor="#808080"
          />
        </View>

        <TouchableOpacity style={styles.loginBtn} onPress={home}>
          <Text style={styles.textButton}>Continuar</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            ¿Aún no te has registrado?{' '}
            <Text style={styles.underline} onPress={signup}>
              Regístrate aquí
            </Text>
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },

  footerText: {
    color: '#FFFF',
  },

  footer: {
    position: 'absolute',
    bottom: 0,
    marginBottom: 30,
  },

  inputView: {
    backgroundColor: '#FFFF',
    borderRadius: 30,
    width: '70%',
    height: 45,
    marginBottom: 20,
    alignItems: 'flex-start',
  },

  underline: {
    textDecorationLine: 'underline',
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    width: '100%',
  },

  textButton: {
    color: '#FFFF',
    fontSize: 20,
  },

  text: {
    color: '#FFFF',
    marginBottom: 10,
    fontSize: 50,
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
  },

  loginBtn: {
    width: '40%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: '#275DAD',
  },
});

export default LoginScreen;
