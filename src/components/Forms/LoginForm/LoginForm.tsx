import { useState } from 'react';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { View } from 'react-native';
import { user_login } from '../../../api/user_api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from '../../Button/Button';
import Input from 'components/Field/Input/Input';
import { stylesLoginForm } from './style';

interface Login {
  email: string;
  password: string;
}

const LoginForm = () => {
  const { navigate } = useNavigation<StackNavigationProp<ParamListBase>>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(formObj: Login): void {
    user_login({
      email: formObj.email,
      password: formObj.password,
    })
      .then(result => {
        if (result?.status === 200) {
          AsyncStorage.setItem('accessToken', result.data.access_token);
          navigate('HomeScreen');
        }
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <>
      <View style={stylesLoginForm.Container}>
        <View style={stylesLoginForm.Field}>
          {/* <FontAwesome name="envelope" color="#00716F" size={24} /> */}
          <Input
            value={email}
            onChange={e => setEmail(e.nativeEvent.text)}
            placeholder="Email Address"
            keyboardType="email-address"
            secureTextEntry={false}
          />
        </View>
        <View style={stylesLoginForm.Field}>
          {/* <FontAwesome name="lock" color="#00716F" size={24} /> */}
          <Input
            value={password}
            onChange={e => setPassword(e.nativeEvent.text)}
            placeholder="Password"
            secureTextEntry
            keyboardType={undefined}
          />
        </View>
        <View>
          <Button theme="primary" label="Войти" onPress={() => handleSubmit({ email, password })} disabled={false} />
        </View>
        <Button label="Новый пользователь" onPress={() => navigate('SignUp')} theme={''} disabled={false} />
      </View>
    </>
  );
};

export default LoginForm;
