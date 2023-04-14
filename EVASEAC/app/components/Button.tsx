import React, {
  View,
  Pressable,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';

interface ButtonProps {
  title: string;
  onClick?: () => void;
  style?: StyleProp<ViewStyle>;
}

const Button = (props: ButtonProps) => {
  return (
    <View style={[styles.container, props.style]}>
      <Pressable style={styles.button} onPress={props.onClick}>
        <Text style={styles.buttonText}>{props.title}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonText: {
    color: 'white',
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
  },
  button: {
    flex: 1,
    backgroundColor: '#275DAD',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
});

export default Button;
