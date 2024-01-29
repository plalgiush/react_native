import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { View, Text } from 'react-native';
import Button from '../../components/Button/Button';
import { stylesHome } from './styles';

const HomeScreen = () => {
  const { navigate } = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={stylesHome.homeContainer}>
      <Button theme="primary" label="Начать" onPress={() => navigate('Sprints')} disabled={false} />
      <Text style={stylesHome.homeText}>Новый спринт</Text>
    </View>
  );
};

export default HomeScreen;
