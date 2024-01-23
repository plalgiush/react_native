import { TextInput, TextInputProps, KeyboardTypeOptions } from 'react-native';
import { stylesInput } from './style';

interface Props extends TextInputProps {
  placeholder: string;
  value: string;
  onChangeText?: ((text: string) => void) | undefined;
  secureTextEntry: boolean;
  keyboardType: KeyboardTypeOptions | undefined;
}

export default function Input({ placeholder, value, onChangeText, secureTextEntry, keyboardType }: Props) {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      style={stylesInput.textInput}
    />
  );
}
