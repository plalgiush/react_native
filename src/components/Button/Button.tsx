import {View, Pressable, Text} from 'react-native';
import {stylesButton} from './style';

interface Props {
  label: string;
  theme: string;
  onPress(): void;
  disabled: boolean;
}

export default function Button({label, theme, onPress}: Props) {
  if (theme === 'primary') {
    return (
      <View style={[stylesButton.buttonContainer]}>
        <Pressable
          style={[stylesButton.button, stylesButton.buttonBackground]}
          onPress={onPress}>
          <Text
            style={[stylesButton.buttonLabel, stylesButton.buttonPrimaryColor]}>
            {label}
          </Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={stylesButton.buttonContainer}>
      <Pressable style={stylesButton.button} onPress={onPress}>
        <Text
          style={[stylesButton.buttonLabel, stylesButton.buttonSecondaryColor]}>
          {label}
        </Text>
      </Pressable>
    </View>
  );
}
