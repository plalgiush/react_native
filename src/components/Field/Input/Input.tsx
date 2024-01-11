import {TextInput} from 'react-native';
import {stylesInput} from './style';

interface Props {
  placeholder: string;
  value: string;
  onChangeText?: ((text: string) => void) | undefined;
  secureTextEntry: boolean;
}

export default function Input({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
}: Props) {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      style={stylesInput.textInput}
    />
  );
}
