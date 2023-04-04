import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';
import {useFonts} from 'expo-font';

interface SignUpScreenProps {
  navigation: any;
}

const SignUpScreen = (props: SignUpScreenProps) => {
  const login = () => {
    props.navigation.navigate('login');
  };

  const [loaded] = useFonts({
    Helvetica: require('../../assets/fonts/Helvetica-Bold.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text> Nombre(s) </Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Ingrese su(s) nombre(s)"
            placeholderTextColor="#808080"
          />
        </View>
        <Text> Apellido(s) </Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Ingrese su(s) apellido(s)"
            placeholderTextColor="#808080"
          />
        </View>
        <Text> Correo electrónico </Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Ingrese su correo"
            placeholderTextColor="#808080"
          />
        </View>

        <Text> Número </Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Ingrese su número"
            placeholderTextColor="#808080"
            keyboardType="numeric"
          />
        </View>
        <TouchableOpacity style={styles.loginBtn} onPress={login}>
          <Text style={styles.textButton}>Resgistrarse</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  TextInput: {
    height: 100,
    flex: 1,
    width: '100%',
    padding: 10,
    marginLeft: 10,
    borderWidth: 1,
    borderColor: 'transparent',
  },

  title: {
    position: 'absolute',
    top: 0,
    marginTop: 40,
    marginBottom: 30,
  },

  titleText: {
    flex: 1,
    marginBottom: 10,
    fontSize: 50,
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
  },

  inputView: {
    backgroundColor: '#0001',
    borderColor: '#0F1110',
    width: '70%',
    height: 45,
    marginBottom: 20,
    alignItems: 'flex-start',
  },

  form: {
    marginTop: 20,
    flex: 1,
    alignItems: 'center',
    width: '100%',
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

  textButton: {
    color: '#FFFF',
    fontSize: 20,
  },
});

export default SignUpScreen;
