import {NavigationProp} from '@react-navigation/native';
import {useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

interface Pt3FormProps {
  navigation: NavigationProp<any, any>;
}

// General TODOs:
// 2. See more about FlatList. Maybe this can give us a solution for rendering each row
// 3. Fix items error (Dropdown picker)
// 4. Fix two dropdowns open at the same time. Better UX behaviour should close other open dropdown when one new it's open
// 5. Fix overlay open dropdown
// 5.1. Fix scroll down inside dropdown. See: https://github.com/hossein-zare/react-native-dropdown-picker/issues/57

const Pt3FormScreen = (props: Pt3FormProps) => {
  // TODO: Refactor this, I hardcoded it, it should be a better way to implement this
  // Opens
  const [openDrop1, setOpenDrop1] = useState(false);
  const [openDrop2, setOpenDrop2] = useState(false);
  const [openDrop3, setOpenDrop3] = useState(false);
  const [openDrop4, setOpenDrop4] = useState(false);
  const [openDrop5, setOpenDrop5] = useState(false);
  const [openDrop6, setOpenDrop6] = useState(false);
  const [openDrop7, setOpenDrop7] = useState(false);
  const [openDrop8, setOpenDrop8] = useState(false);
  const [openDrop9, setOpenDrop9] = useState(false);
  const [openDrop10, setOpenDrop10] = useState(false);
  const [openDrop11, setOpenDrop11] = useState(false);
  const [openDrop12, setOpenDrop12] = useState(false);
  const [openDrop13, setOpenDrop13] = useState(false);
  const [openDrop14, setOpenDrop14] = useState(false);
  const [openDrop15, setOpenDrop15] = useState(false);
  const [openDrop16, setOpenDrop16] = useState(false);
  const [openDrop17, setOpenDrop17] = useState(false);
  const [openDrop18, setOpenDrop18] = useState(false);
  const [openDrop19, setOpenDrop19] = useState(false);
  const [openDrop20, setOpenDrop20] = useState(false);

  // Values
  const [value1, setValue1] = useState(false);
  const [value2, setValue2] = useState(false);
  const [value3, setValue3] = useState(false);
  const [value4, setValue4] = useState(false);
  const [value5, setValue5] = useState(false);
  const [value6, setValue6] = useState(false);
  const [value7, setValue7] = useState(false);
  const [value8, setValue8] = useState(false);
  const [value9, setValue9] = useState(false);
  const [value10, setValue10] = useState(false);
  const [value11, setValue11] = useState(false);
  const [value12, setValue12] = useState(false);
  const [value13, setValue13] = useState(false);
  const [value14, setValue14] = useState(false);
  const [value15, setValue15] = useState(false);
  const [value16, setValue16] = useState(false);
  const [value17, setValue17] = useState(false);
  const [value18, setValue18] = useState(false);
  const [value19, setValue19] = useState(false);
  const [value20, setValue20] = useState(false);

  // Items, TODO: not sure if we can do better than this
  const [itemsDrop1, setItemsDrop1] = useState([
    {label: 'Pobre', value: 'poor'},
    {label: 'Alto', value: 'high'},
  ]);
  const [itemsDrop2, setItemsDrop2] = useState([
    {label: '20', value: 20},
    {label: '10', value: 10},
  ]);
  const [itemsDrop3, setItemsDrop3] = useState([
    {label: 'Pobre', value: 'poor'},
    {label: 'Alto', value: 'high'},
  ]);
  const [itemsDrop4, setItemsDrop4] = useState([
    {label: '20', value: 20},
    {label: '10', value: 10},
  ]);
  const [itemsDrop5, setItemsDrop5] = useState([
    {label: 'Pobre', value: 'poor'},
    {label: 'Alto', value: 'high'},
  ]);
  const [itemsDrop6, setItemsDrop6] = useState([
    {label: '20', value: 20},
    {label: '10', value: 10},
  ]);
  const [itemsDrop7, setItemsDrop7] = useState([
    {label: 'Pobre', value: 'poor'},
    {label: 'Alto', value: 'high'},
  ]);
  const [itemsDrop8, setItemsDrop8] = useState([
    {label: '20', value: 20},
    {label: '10', value: 10},
  ]);
  const [itemsDrop9, setItemsDrop9] = useState([
    {label: 'Pobre', value: 'poor'},
    {label: 'Alto', value: 'high'},
  ]);
  const [itemsDrop10, setItemsDrop10] = useState([
    {label: '20', value: 20},
    {label: '10', value: 10},
  ]);
  const [itemsDrop11, setItemsDrop11] = useState([
    {label: 'Pobre', value: 'poor'},
    {label: 'Alto', value: 'high'},
  ]);
  const [itemsDrop12, setItemsDrop12] = useState([
    {label: '20', value: 20},
    {label: '10', value: 10},
  ]);
  const [itemsDrop13, setItemsDrop13] = useState([
    {label: 'Pobre', value: 'poor'},
    {label: 'Alto', value: 'high'},
  ]);
  const [itemsDrop14, setItemsDrop14] = useState([
    {label: '20', value: 20},
    {label: '10', value: 10},
  ]);
  const [itemsDrop15, setItemsDrop15] = useState([
    {label: 'Pobre', value: 'poor'},
    {label: 'Alto', value: 'high'},
  ]);
  const [itemsDrop16, setItemsDrop16] = useState([
    {label: '20', value: 20},
    {label: '10', value: 10},
  ]);
  const [itemsDrop17, setItemsDrop17] = useState([
    {label: 'Pobre', value: 'poor'},
    {label: 'Alto', value: 'high'},
  ]);
  const [itemsDrop18, setItemsDrop18] = useState([
    {label: '20', value: 20},
    {label: '10', value: 10},
  ]);
  const [itemsDrop19, setItemsDrop19] = useState([
    {label: 'Pobre', value: 'poor'},
    {label: 'Alto', value: 'high'},
  ]);
  const [itemsDrop20, setItemsDrop20] = useState([
    {label: '20', value: 20},
    {label: '10', value: 10},
  ]);

  const renderItem = ({item: any}) => {
    return (
      <View style={styles.container}>
        {/* First row */}
        <Text>Heterogenidad y estabilidad del sustrato disponibles</Text>
        <View style={styles.column}>
          <View style={styles.item}>
            <DropDownPicker
              open={openDrop1}
              value={value1}
              items={itemsDrop1}
              setOpen={setOpenDrop1}
              setValue={setValue1}
              setItems={setItemsDrop1}
            />
          </View>
          <View style={styles.item}>
            <DropDownPicker
              open={openDrop2}
              value={value2}
              items={itemsDrop2}
              setOpen={setOpenDrop2}
              setValue={setValue2}
              setItems={setItemsDrop2}
            />
          </View>
        </View>

        {/* Second row */}
        <Text>Empotramiento del sustrato</Text>
        <View style={styles.column}>
          <View style={styles.item}>
            <DropDownPicker
              open={openDrop3}
              value={value3}
              items={itemsDrop3}
              setOpen={setOpenDrop3}
              setValue={setValue3}
              setItems={setItemsDrop3}
            />
          </View>
          <View style={styles.item}>
            <DropDownPicker
              open={openDrop4}
              value={value4}
              items={itemsDrop4}
              setOpen={setOpenDrop4}
              setValue={setValue4}
              setItems={setItemsDrop4}
            />
          </View>
        </View>

        {/* Third row */}
        <Text>Relación profundidad y velocidad</Text>
        <View style={styles.column}>
          <View style={styles.item}>
            <DropDownPicker
              open={openDrop5}
              value={value5}
              items={itemsDrop5}
              setOpen={setOpenDrop5}
              setValue={setValue5}
              setItems={setItemsDrop5}
            />
          </View>
          <View style={styles.item}>
            <DropDownPicker
              open={openDrop6}
              value={value6}
              items={itemsDrop6}
              setOpen={setOpenDrop6}
              setValue={setValue6}
              setItems={setItemsDrop6}
            />
          </View>
        </View>

        {/* Fourth row */}
        <Text>Deposición de sedimentos</Text>
        <View style={styles.column}>
          <View style={styles.item}>
            <DropDownPicker
              open={openDrop7}
              value={value7}
              items={itemsDrop7}
              setOpen={setOpenDrop7}
              setValue={setValue7}
              setItems={setItemsDrop7}
            />
          </View>
          <View style={styles.item}>
            <DropDownPicker
              open={openDrop8}
              value={value8}
              items={itemsDrop8}
              setOpen={setOpenDrop8}
              setValue={setValue8}
              setItems={setItemsDrop8}
            />
          </View>
        </View>

        {/* Fifth row */}
        <Text>Estado del flujo del cauce</Text>
        <View style={styles.column}>
          <View style={styles.item}>
            <DropDownPicker
              open={openDrop9}
              value={value9}
              items={itemsDrop9}
              setOpen={setOpenDrop9}
              setValue={setValue9}
              setItems={setItemsDrop9}
            />
          </View>
          <View style={styles.item}>
            <DropDownPicker
              open={openDrop10}
              value={value10}
              items={itemsDrop10}
              setOpen={setOpenDrop10}
              setValue={setValue10}
              setItems={setItemsDrop10}
            />
          </View>
        </View>

        {/* Sixth row */}
        <Text>Alteración del cauce</Text>
        <View style={styles.column}>
          <View style={styles.item}>
            <DropDownPicker
              open={openDrop11}
              value={value11}
              items={itemsDrop11}
              setOpen={setOpenDrop11}
              setValue={setValue11}
              setItems={setItemsDrop11}
            />
          </View>
          <View style={styles.item}>
            <DropDownPicker
              open={openDrop12}
              value={value12}
              items={itemsDrop12}
              setOpen={setOpenDrop12}
              setValue={setValue12}
              setItems={setItemsDrop12}
            />
          </View>
        </View>

        {/* Seventh row */}
        <Text>Frecuencia de rápidos</Text>
        <View style={styles.column}>
          <View style={styles.item}>
            <DropDownPicker
              open={openDrop13}
              value={value13}
              items={itemsDrop13}
              setOpen={setOpenDrop13}
              setValue={setValue13}
              setItems={setItemsDrop13}
            />
          </View>
          <View style={styles.item}>
            <DropDownPicker
              open={openDrop14}
              value={value14}
              items={itemsDrop14}
              setOpen={setOpenDrop14}
              setValue={setValue14}
              setItems={setItemsDrop14}
            />
          </View>
        </View>

        {/* Eigth row */}
        <Text>Estabilidad de la ribera</Text>
        <View style={styles.column}>
          <View style={styles.item}>
            <DropDownPicker
              open={openDrop15}
              value={value15}
              items={itemsDrop15}
              setOpen={setOpenDrop15}
              setValue={setValue15}
              setItems={setItemsDrop15}
            />
          </View>
          <View style={styles.item}>
            <DropDownPicker
              open={openDrop16}
              value={value16}
              items={itemsDrop16}
              setOpen={setOpenDrop16}
              setValue={setValue16}
              setItems={setItemsDrop16}
            />
          </View>
        </View>

        {/* Nineth row */}
        <Text>Vegetación protectora de la ribera</Text>
        <View style={styles.column}>
          <View style={styles.item}>
            <DropDownPicker
              open={openDrop17}
              value={value17}
              items={itemsDrop17}
              setOpen={setOpenDrop17}
              setValue={setValue17}
              setItems={setItemsDrop17}
            />
          </View>
          <View style={styles.item}>
            <DropDownPicker
              open={openDrop18}
              value={value18}
              items={itemsDrop18}
              setOpen={setOpenDrop18}
              setValue={setValue18}
              setItems={setItemsDrop18}
            />
          </View>
        </View>

        {/* Tenth row */}
        <Text>Amplitud de la vegetación ribereña</Text>
        <View style={styles.column}>
          <View style={styles.item}>
            <DropDownPicker
              open={openDrop19}
              value={value19}
              items={itemsDrop19}
              setOpen={setOpenDrop19}
              setValue={setValue19}
              setItems={setItemsDrop19}
            />
          </View>
          <View style={styles.item}>
            <DropDownPicker
              open={openDrop20}
              value={value20}
              items={itemsDrop20}
              setOpen={setOpenDrop20}
              setValue={setValue20}
              setItems={setItemsDrop20}
            />
          </View>
        </View>

        {/* TODO: Temporary solution */}
        <View style={styles.container} />
      </View>
    );
  };

  return (
    <FlatList
      style={styles.container}
      data={['']}
      renderItem={renderItem}
      keyExtractor={item => item}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    // paddingBottom: 100, TODO: this is not working
  },
  column: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'row', // add this to display items
  },
  item: {
    width: '50%',
    padding: 10,
  },
});

export default Pt3FormScreen;
