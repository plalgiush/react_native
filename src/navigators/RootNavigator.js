import { createStackNavigator } from '@react-navigation/stack';
import { PersonListScreen } from '../screens/PersonListScreen';

const Stack = createStackNavigator();

export const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={'list'}>
      <Stack.Screen name={'list'} component={PersonListScreen} />
    </Stack.Navigator>
  );
};

// import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
// import {Navigation} from 'react-native-navigation';
// import FirstTabScreen from './FirstTabScreen';
// import SecondTabScreen from './SecondTabScreen';
// import PushedScreen from './PushedScreen';
// // register all screens of the app (including internal ones)
// export function registerScreens() {
//   Navigation.registerComponent(
//     'example.FirstTabScreen',
//     () => gestureHandlerRootHOC(FirstTabScreen),
//     () => FirstTabScreen,
//   );
//   Navigation.registerComponent(
//     'example.SecondTabScreen',
//     () => gestureHandlerRootHOC(SecondTabScreen),
//     () => SecondTabScreen,
//   );
//   Navigation.registerComponent(
//     'example.PushedScreen',
//     () => gestureHandlerRootHOC(PushedScreen),
//     () => PushedScreen,
//   );
// }
