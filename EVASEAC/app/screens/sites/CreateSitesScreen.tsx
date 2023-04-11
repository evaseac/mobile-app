
import { StyleSheet, Text, View, TextInput } from 'react-native';
import MapView from 'react-native-maps';
import Button from '../../components/Button';

interface CreateSitiosProps {
  navigation: any;
}

const CreateSitesScreen = (props:CreateSitiosProps) => {
  const initialRegion = {
    latitude: 19.50593,
    longitude: -99.14665,
    latitudeDelta: 0.004,
    longitudeDelta: 0.005,
  };
    const home = () => {
        props.navigation.navigate("home")
    }

    const verticalInput = (label: string, placeholder: string) => {
      return (
        <View>
          <Text>{label}</Text>
          <TextInput style={styles.input} placeholder={placeholder} />
        </View>
      );
    };

    return (
      <View style={styles.container}>
        <View style={styles.mapContainer}>
          <View style={styles.mapViewMask}>
          <MapView style={styles.map} initialRegion={initialRegion} />
            </View>
        </View>

        <View style={styles.formContainer}>
          <View style={[styles.formFirstSectionContainer, styles.formSectionContainer]}>
            <Text style={styles.formHeader}>Temporada</Text>
            <View style={[styles.formBody, styles.formBodyHorizontal]}>
              <Text>Escoja la fecha del sitio</Text>
              <TextInput style={styles.input} placeholder="dd/mm/yyyy"/>
            </View>
          </View>

          <View style={[styles.formSecondSectionContainer, styles.formSectionContainer]}>
            <Text style={styles.formHeader}>Datos de locación automáticos</Text>
            <View style={[styles.formBody, styles.formBodyHorizontal]}>
              {verticalInput('Longitud', '')}
              {verticalInput('Latitud', '')}
              {verticalInput('Altitud (m)', '')}
            </View>
          </View>

          <View style={[styles.formThirdSectionContainer, styles.formSectionContainer]}>
            <Text style={styles.formHeader}>Ingresar datos de locación manualmente</Text>
            <View>
              <Text style={styles.formHeader}>Datos generales</Text>
              <View style={styles.formBody}>
                <View style={styles.formBodyHorizontal}>
                  {verticalInput('Nombre (Cuerpo de agua)', '')}
                  {verticalInput('Id Estación', '')}
                </View>
                <View style={styles.formBodyHorizontal}>
                  {verticalInput('Estado', '')}
                  {verticalInput('Municipio', '')}
                </View>
                <View style={styles.formBodyHorizontal}>
                  {verticalInput('Cuenca', '')}
                  {verticalInput('Localidad', '')}
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <Button title="CAPTURAR FOTO" style={styles.button} />
        </View>
      </View>
    );

}

const styles = StyleSheet.create({
  debug:{
    backgroundColor: 'red',
  },
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    mapContainer: {
      flex: 3,
      paddingVertical: 30,
      paddingHorizontal: 30,
      // backgroundColor: 'red',
    },
    mapViewMask: {
      flex: 1,
      borderRadius: 10,
      overflow: 'hidden',
    },
    map: {
      flex: 1,
    },
    formContainer: {
      flex: 7,
      // backgroundColor: 'blue',
    },
    formSectionContainer: {
      paddingHorizontal: 30,
      paddingVertical: 10,
    },
    formFirstSectionContainer: {
      flex: 1,
      // backgroundColor: 'yellow',
    },
    formSecondSectionContainer: {
      flex: 2,
      // backgroundColor: 'brown',
    },
    formThirdSectionContainer: {
      flex: 4,
      // backgroundColor: 'gray',
    },
    formBody: {
      backgroundColor: '#F6F6F6',
      borderRadius: 10,
      paddingHorizontal: 10,
      paddingVertical: 5,
    },
    formBodyHorizontal: {
      // flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    input: {
      borderBottomWidth: 1,
      borderColor: '#999999',
    },
    formHeader: {
      fontWeight: 'bold',
    },
    buttonContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      // backgroundColor: 'green',
    },
    button: {
      maxHeight: 40,
    },
});

export default CreateSitesScreen;
