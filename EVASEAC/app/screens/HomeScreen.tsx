import {
  Pressable,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {useState} from 'react';
import Constants from 'expo-constants';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

interface HomeScreenProps {
  navigation: any;
}

const HomeScreen = (props: HomeScreenProps) => {
  const nombre = 'Juan';
  const apellido = 'Gómez';
  const navigateTo = (screen: string) => {
    props.navigation.navigate(screen);
  };
  const navigateToWithDropdown = (screen: string) => {
    setDropdownVisible(!dropdownVisible);
    props.navigation.navigate(screen);
  };

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        imageStyle={styles.image_background}
        source={require('../../assets/parque.jpg')}>
        <Text style={styles.welcome_text}>
          {' '}
          Bienvenido {nombre} {apellido}{' '}
        </Text>
      </ImageBackground>

      <View style={styles.fast_access}>
        <Text style={styles.text}> Accessos rápidos </Text>
        <View style={styles.fast_access_buttons}>
          <View style={{alignItems: 'center'}}>
            <Pressable
              style={styles.circular_button}
              onPress={() => navigateTo('home')}>
              <FontAwesomeIcon name="map" size={30} color="#ffff" />
            </Pressable>
            <Text style={{fontSize: 12}}> Nuevo sitio </Text>
          </View>

          <View style={{alignItems: 'center'}}>
            <Pressable
              style={styles.circular_button}
              onPress={() => navigateTo('home')}>
              <FontAwesomeIcon name="history" size={30} color="#ffff" />
            </Pressable>
            <Text style={{fontSize: 12}}> Historial </Text>
          </View>

          <View style={{alignItems: 'center'}}>
            <Pressable
              style={styles.circular_button}
              onPress={() => navigateTo('Protocol1')}>
              <Text style={styles.button_text}> 1 </Text>
            </Pressable>
            <Text style={{fontSize: 12}}> Protocolo 1 </Text>
          </View>

          <View style={{alignItems: 'center'}}>
            <Pressable
              style={styles.circular_button}
              onPress={() => navigateTo('Protocol2')}>
              <Text style={styles.button_text}> 2 </Text>
            </Pressable>
            <Text style={{fontSize: 12}}> Protocolo 2 </Text>
          </View>
        </View>
      </View>

      <View style={styles.last_action}>
        <Text style={styles.text}>Última acción / En proceso</Text>
        <View style={styles.box}>
          <Text style={styles.box_text}>Protocolo 3</Text>
        </View>
      </View>

      <View style={styles.last_action}>
        <Text style={styles.text}>Último sitio / En proceso</Text>
        <ImageBackground
          style={styles.box}
          imageStyle={styles.image_background}
          source={require('../../assets/map.png')}>
          <Text style={styles.box_text}>ESCOM</Text>
        </ImageBackground>
      </View>

      <View style={{flex: 0.3, alignItems: 'center', alignContent: 'center'}}>
        <TouchableOpacity onPress={toggleDropdown}>
          <View style={styles.button}>
            <Text style={[{fontSize: 35}, styles.box_text]}>Más opciones</Text>
          </View>
        </TouchableOpacity>
      </View>

      <Modal style={styles.container} visible={dropdownVisible}>
        <View
          style={[styles.container, {backgroundColor: '#275DAD', padding: 20}]}>
          <TouchableOpacity style={styles.button} onPress={toggleDropdown}>
            <Text style={[{fontSize: 30}, styles.box_text]}>Volver</Text>
          </TouchableOpacity>
          <View style={styles.fast_access_buttons}>
            <View style={{alignItems: 'center'}}>
              <Pressable
                style={[styles.circular_button, {backgroundColor: 'white'}]}
                onPress={() => navigateToWithDropdown('Protocol1')}>
                <Text style={[styles.button_text, {color: '#275DAD'}]}>
                  {' '}
                  1{' '}
                </Text>
              </Pressable>
              <Text style={{fontSize: 12}}> Protocolo 1 </Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <Pressable
                style={[styles.circular_button, {backgroundColor: 'white'}]}
                onPress={() => navigateToWithDropdown('Protocol2')}>
                <Text style={[styles.button_text, {color: '#275DAD'}]}>
                  {' '}
                  2{' '}
                </Text>
              </Pressable>
              <Text style={{fontSize: 12}}> Protocolo 2 </Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <Pressable
                style={[styles.circular_button, {backgroundColor: 'white'}]}
                onPress={() => navigateToWithDropdown('Protocol3')}>
                <Text style={[styles.button_text, {color: '#275DAD'}]}>
                  {' '}
                  3{' '}
                </Text>
              </Pressable>
              <Text style={{fontSize: 12}}> Protocolo 1 </Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <Pressable
                style={[styles.circular_button, {backgroundColor: 'white'}]}
                onPress={() => navigateToWithDropdown('Protocol4')}>
                <Text style={[styles.button_text, {color: '#275DAD'}]}>
                  {' '}
                  4{' '}
                </Text>
              </Pressable>
              <Text style={{fontSize: 12}}> Protocolo 4 </Text>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },

  fast_access: {
    flex: 0.5,
    width: '95%',
    marginTop: 10,
  },

  menu: {
    flex: 1,
  },

  fast_access_buttons: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  circular_button: {
    margin: 4,
    height: 70,
    width: 70,
    borderRadius: 35,
    backgroundColor: '#275DAD',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },

  button: {
    margin: 10,
    height: 50,
    width: 150,
    borderRadius: 10,
    backgroundColor: '#A1C6EA',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },

  image: {
    flex: 0.3,
    marginTop: Constants.statusBarHeight,
    width: '95%',
    backgroundColor: '#275DAD',
    borderRadius: 10,
  },

  box: {
    flex: 1,
    width: '95%',
    backgroundColor: '#275DAD',
    borderRadius: 10,
    alignItems: 'flex-end',
  },

  box_text: {
    color: 'white',
    margin: 10,
    fontSize: 20,
    fontFamily: 'Helvetica',
    marginBottom: 5,
    fontWeight: 'bold',
  },

  image_background: {
    display: 'flex',
    opacity: 0.3,
    height: '100%',
    width: '100%',
    borderRadius: 10,
  },

  welcome_text: {
    color: 'white',
    margin: 10,
    fontSize: 30,
    fontFamily: 'Helvetica',
  },

  text: {
    fontSize: 20,
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
  },

  button_text: {
    color: 'white',
    fontSize: 30,
    fontFamily: 'Helvetica',
  },

  last_action: {
    flex: 0.2,
    width: '95%',
    height: '100%',
    margin: 20,
  },
});

export default HomeScreen;
