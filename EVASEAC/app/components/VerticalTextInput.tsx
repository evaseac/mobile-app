import React, {
  StyleSheet,
  View,
  Text,
  TextInput,
  StyleProp,
  ViewStyle,
} from 'react-native';

interface VerticalTextInputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChangeText?: (value: string) => void;
  style?: StyleProp<ViewStyle>;
}

const VerticalTextInput = (props: VerticalTextInputProps) => {
  return (
    <View style={[styles.inputFormContainer, props.style]}>
      <Text>{props.label}</Text>
      <TextInput
        style={styles.input}
        placeholder={props.placeholder}
        value={props.value}
        onChangeText={props.onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderColor: '#999999',
  },
  inputFormContainer: {
    flex: 1,
    paddingHorizontal: 5,
  },
});

export default VerticalTextInput;
