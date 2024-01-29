import AsyncStorage from '@react-native-async-storage/async-storage';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useEffect } from 'react';
import { View, Text } from 'react-native';

const Splash = () => {
  const { navigate } = useNavigation<StackNavigationProp<ParamListBase>>();

  useEffect(() => {
    handleGetToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleGetToken = async () => {
    const dataToken = await AsyncStorage.getItem('accessToken');

    !dataToken ? navigate('Login') : navigate('HomeScreen');
  };

  return (
    <View>
      <Text>Splash</Text>
    </View>
  );
};

export default Splash;
