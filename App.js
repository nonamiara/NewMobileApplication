import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Details from './screens/Details';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function StackDemo() {
  return (
    <NavigationContainer>
    <DrawerDemo />
    </NavigationContainer>
  );
}