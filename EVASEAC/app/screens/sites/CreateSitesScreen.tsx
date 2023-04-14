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

const CreateSitesScreen = () => {
  const initialRegion = {
    latitude: 19.50593,
    longitude: -99.14665,
    latitudeDelta: 0.004,
    longitudeDelta: 0.005,
  };

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

  const verticalInput = (
    label: string,
    placeholder: string,
    value: string = '',
    flex: number = 1,
  ) => {
    return (
      <View style={[styles.inputFormContainer, {flex}]}>
        <Text>{label}</Text>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={value}
        />
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
        <ScrollView>
          <View
            style={[
              styles.formFirstSectionContainer,
              styles.formSectionContainer,
            ]}>
            <Text style={styles.formHeader}>Temporada</Text>
            <View style={[styles.formBody, styles.formBodyHorizontal]}>
              <Text>Escoja la fecha del sitio</Text>
              <TextInput style={styles.input} placeholder="dd/mm/yyyy" />
            </View>
          </View>

          <View
            style={[
              styles.formSecondSectionContainer,
              styles.formSectionContainer,
            ]}>
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
                {verticalInput(
                  'Longitud',
                  '',
                  initialRegion.longitude.toString(),
                )}
                {verticalInput(
                  'Latitud',
                  '',
                  initialRegion.latitude.toString(),
                )}
                {verticalInput('Altitud (m)', '', '80')}
              </View>
            ) : (
              <></>
            )}
          </View>

          <View
            style={[
              styles.formThirdSectionContainer,
              styles.formSectionContainer,
            ]}>
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
                    {verticalInput('Nombre (Cuerpo de agua)', '', 3)}
                    {verticalInput('Id Estación', '', 1)}
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
  debug: {
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
    // flex: 1,
    // backgroundColor: 'yellow',
  },
  formSecondSectionContainer: {
    // flex: 2,
    // backgroundColor: 'brown',
  },
  formThirdSectionContainer: {
    // flex: 4,
    // backgroundColor: 'gray',
  },
  formBody: {
    backgroundColor: '#F6F6F6',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  formBodyHorizontal: {
    // flex: 1,
    // display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#999999',
  },
  inputFormContainer: {
    // flex: 1,
    paddingHorizontal: 5,
  },
  formHeader: {
    fontWeight: 'bold',
  },
  formCallapsibleHeader: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'red',
  },
  formSeparator: {
    borderColor: '#999999',
    borderTopWidth: 1,
    // marginTop: 1,
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
