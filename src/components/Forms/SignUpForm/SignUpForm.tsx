import { SafeAreaView, View } from 'react-native';
import { useState } from 'react';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { user_register } from '../../../api/user_api';
import Button from '../../Button/Button';
import Input from 'components/Field/Input/Input';
import { stylesSignUpForm } from './style';

interface SignUp {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

const SignUpForm = () => {
  const { navigate } = useNavigation<StackNavigationProp<ParamListBase>>();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  function handleSubmit(formObj: SignUp): void {
    user_register({
      name: formObj.name,
      email: formObj.email,
      password: formObj.password,
      password_confirmation: formObj.passwordConfirmation,
    })
      .then(result => {
        if (result?.status === 201) {
          navigate('Login');
        }
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <>
      <SafeAreaView style={stylesSignUpForm.Container}>
        <View style={stylesSignUpForm.signupContainer}>
          <View style={stylesSignUpForm.Field}>
            {/* <FontAwesome name="user" color="#00716F" size={24} /> */}
            <Input
              value={name}
              onChangeText={e => setName(e)}
              placeholder="Full Name"
              keyboardType="default"
              secureTextEntry={false}
            />
          </View>
          <View style={stylesSignUpForm.Field}>
            {/* <FontAwesome name="envelope" color="#00716F" size={24} /> */}
            <Input
              value={email}
              onChangeText={e => setEmail(e)}
              placeholder="Email Address"
              keyboardType="email-address"
              secureTextEntry={false}
            />
          </View>
          <View style={stylesSignUpForm.Field}>
            {/* <FontAwesome name="lock" color="#00716F" size={24} /> */}
            <Input
              value={password}
              onChangeText={e => setPassword(e)}
              placeholder="Password"
              secureTextEntry
              keyboardType={undefined}
            />
          </View>
          <View style={stylesSignUpForm.Field}>
            {/* <FontAwesome name="lock" color="#00716F" size={24} /> */}
            <Input
              value={passwordConfirmation}
              onChangeText={e => setPasswordConfirmation(e)}
              placeholder="Confirm Password"
              secureTextEntry
              keyboardType={undefined}
            />
          </View>
          <Button
            theme="primary"
            label="Регистрация"
            onPress={() => handleSubmit({ name, email, password, passwordConfirmation })}
            disabled={false}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default SignUpForm;
