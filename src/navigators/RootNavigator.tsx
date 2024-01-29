import { createStackNavigator } from '@react-navigation/stack';
import Splash from 'screens/Splash/Splash';
import HomeScreen from 'screens/HomeScreen/HomeScreen';
import SignUp from 'screens/SignUp/SignUp';
import Login from 'screens/Login/Login';

const Stack = createStackNavigator();

export const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={'Login'}>
      <Stack.Screen name={'Splash'} component={Splash} />
      <Stack.Screen name={'SignUp'} component={SignUp} />
      <Stack.Screen name={'Login'} component={Login} />
      <Stack.Screen name={'HomeScreen'} component={HomeScreen} />
    </Stack.Navigator>
  );
};
