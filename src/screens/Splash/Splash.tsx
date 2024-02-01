import AsyncStorage from '@react-native-async-storage/async-storage';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useEffect } from 'react';
import { View, Text } from 'react-native';

const Splash = () => {
  const { navigate } = useNavigation<StackNavigationProp<ParamListBase>>();

  useEffect(() => {
    async function fetchTocken() {
      const dataToken = await AsyncStorage.getItem('accessToken');

      !dataToken ? navigate('Login') : navigate('HomeScreen');
    }

    fetchTocken();
  }, [navigate]);

  return (
    <View>
      <Text>Splash</Text>
    </View>
  );
};

export default Splash;
