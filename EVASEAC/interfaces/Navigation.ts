import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {

    Pdp: undefined; //current screen
  
    SignUp: undefined; // don't pass any props to it
  
    Home: undefined;
  
    // see: https://stackoverflow.com/questions/47924501/add-strong-typing-for-react-navigation-props
  };
  
export default interface NavProps {
    navigation: NativeStackNavigationProp<RootStackParamList, 'Pdp'>;
}
  