import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from './navigators/RootNavigator';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

function App(): JSX.Element {
  return (
    <GestureHandlerRootView>
      <SafeAreaView>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

export default App;
