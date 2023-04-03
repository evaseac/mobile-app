import { Button, StyleSheet, Text, View, Pressable } from 'react-native';
import MapView from 'react-native-maps';

interface SitiosProps {
  navigation: any;
}

const SitesScreen = (props:SitiosProps) => {
  const initialRegion = {
    latitude: 19.50593,
    longitude: -99.14665,
    latitudeDelta: 0.004,
    longitudeDelta: 0.005,
  };
  const create = () => {
    props.navigation.navigate("create-site")
  }
  const card = (title: string, text: string) => {
    return (
      <View style={styles.cardContainer}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardBody}>{text}</Text>
      </View>
    );
  }

  const selectedSite = 'Gausave, 01-2022';
  const cardText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <View style={styles.mapViewMask}>
          <MapView style={styles.map} initialRegion={initialRegion}/>
        </View>
        <View style={styles.mapFooter}>
          <Text>Sitio seleccionado:</Text>
          <Text style={styles.blueFont}>{selectedSite}</Text>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <Pressable style={styles.primaryButton} onPress={create}>
          <Text style={styles.primaryButtonText}>CREAR NUEVO</Text>
        </Pressable>
        <Pressable style={styles.primaryButton} onPress={create}>
          <Text style={styles.primaryButtonText}>EDITAR</Text>
        </Pressable>
      </View>
      <View style={styles.cardsContainers}>
        {card('Punto de medición', cardText)}
        {card('Estado físico-químico', cardText)}
      </View>
    </View>
  );

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    primaryButtonText: {
      color: 'white',
      fontFamily: 'Helvetica',
      fontWeight: 'bold',
    },
    primaryButton: {
      backgroundColor: '#275DAD',
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      width: 120,
      height: 40,
    },
    mapContainer: {
      flex: 4,
      paddingTop: 30,
      paddingBottom: 20,
      paddingHorizontal: 40,
    },
    mapViewMask: {
      flex: 5,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      overflow: 'hidden',
    },
    map: {
      flex: 1,
    },
    mapFooter: {
      backgroundColor: '#E8E8E8',
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
    },
    blueFont: {
      color: '#275DAD',
      fontWeight: 'bold',
    },
    buttonsContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
    },
    cardsContainers: {
      flex: 6,
      justifyContent: 'space-evenly',
      padding: 40,
    },
    cardContainer: {
      backgroundColor: '#275DAD',
      borderRadius: 10,
      padding: 10,
    },
    cardTitle: {
      textAlign: 'center',
      color: 'white',
      fontWeight: 'bold',
      fontSize: 18,
    },
    cardBody: {
      textAlign: 'center',
      color: 'white',
    },
});

export default SitesScreen;
