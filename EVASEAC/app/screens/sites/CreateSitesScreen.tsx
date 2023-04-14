import {Ionicons} from '@expo/vector-icons';
import {useState} from 'react';
import React, {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  ScrollView,
} from 'react-native';
import MapView from 'react-native-maps';
import Button from '../../components/Button';
import VerticalTextInput from '../../components/VerticalTextInput';

const CreateSitesScreen = () => {
  const initialRegion = {
    latitude: 19.50593,
    longitude: -99.14665,
    latitudeDelta: 0.004,
    longitudeDelta: 0.005,
  };

  const [latitude, setLatitude] = useState(initialRegion.latitude.toString());
  const [longitude, setLongitude] = useState(
    initialRegion.longitude.toString(),
  );
  const [altitude, setAltitude] = useState('80');
  const [formSectionShow, setFormSectionShow] = useState([true, true]);

  const toggleFormSection = (index: number) => {
    const prevVal = [...formSectionShow];
    prevVal[index] = !prevVal[index];
    setFormSectionShow(prevVal);
  };

  const getCollapseIcon = (index: number) => {
    return formSectionShow[index] ? (
      <Ionicons name="chevron-up" />
    ) : (
      <Ionicons name="caret-down" />
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
        <ScrollView>
          <View style={styles.formSectionContainer}>
            <Text style={styles.formHeader}>Temporada</Text>
            <View style={[styles.formBody, styles.formBodyHorizontal]}>
              <Text>Escoja la fecha del sitio</Text>
              <TextInput style={styles.input} placeholder="dd/mm/yyyy" />
            </View>
          </View>

          <View style={styles.formSectionContainer}>
            <Pressable
              style={styles.formCallapsibleHeader}
              onPress={() => toggleFormSection(0)}>
              <Text style={styles.formHeader}>
                Datos de locación automáticos
              </Text>
              {getCollapseIcon(0)}
            </Pressable>
            <View style={styles.formSeparator} />
            {formSectionShow[0] ? (
              <View style={[styles.formBody, styles.formBodyHorizontal]}>
                <VerticalTextInput
                  label="Longitud"
                  value={longitude}
                  onChangeText={setLongitude}
                />
                <VerticalTextInput
                  label="Latitud"
                  value={latitude}
                  onChangeText={setLatitude}
                />
                <VerticalTextInput
                  label="Altitud (m)"
                  value={altitude}
                  onChangeText={setAltitude}
                />
              </View>
            ) : (
              <></>
            )}
          </View>

          <View style={styles.formSectionContainer}>
            <Pressable
              style={styles.formCallapsibleHeader}
              onPress={() => toggleFormSection(1)}>
              <Text style={styles.formHeader}>
                Ingresar datos de locación manualmente
              </Text>
              {getCollapseIcon(1)}
            </Pressable>
            <View style={styles.formSeparator} />
            {formSectionShow[1] ? (
              <View>
                <Text style={styles.formHeader}>Datos generales</Text>
                <View style={styles.formBody}>
                  <View style={styles.formBodyHorizontal}>
                    <VerticalTextInput
                      label="Nombre (Cuerpo de agua)"
                      style={styles.flex3}
                    />
                    <VerticalTextInput label="Id Estación" />
                  </View>
                  <View style={styles.formBodyHorizontal}>
                    <VerticalTextInput label="Estado" />
                    <VerticalTextInput label="Municipio" />
                  </View>
                  <View style={styles.formBodyHorizontal}>
                    <VerticalTextInput label="Cuenca" />
                    <VerticalTextInput label="Localidad" />
                  </View>
                </View>
              </View>
            ) : (
              <></>
            )}
          </View>
        </ScrollView>
      </View>

      <View style={styles.buttonContainer}>
        <Button title="CAPTURAR FOTO" style={styles.button} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mapContainer: {
    flex: 3,
    paddingVertical: 30,
    paddingHorizontal: 30,
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
  },
  formSectionContainer: {
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  formBody: {
    backgroundColor: '#F6F6F6',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  formBodyHorizontal: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#999999',
  },
  inputFormContainer: {
    paddingHorizontal: 5,
  },
  formHeader: {
    fontWeight: 'bold',
  },
  formCallapsibleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  formSeparator: {
    borderColor: '#999999',
    borderTopWidth: 1,
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    maxHeight: 40,
  },
  flex3: {
    flex: 3,
  },
});

export default CreateSitesScreen;
