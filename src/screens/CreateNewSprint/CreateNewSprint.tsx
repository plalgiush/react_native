import { View } from 'react-native';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import Button from '../../components/Button/Button';

const CreateNewSprint = () => {
  const { navigate } = useNavigation<StackNavigationProp<ParamListBase>>();
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaProvider>
      <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
        <Button theme="primary" label="Добавить спринт" onPress={() => navigate('CreateNewSprint')} disabled={false} />
      </View>
    </SafeAreaProvider>
  );
};

export default CreateNewSprint;
