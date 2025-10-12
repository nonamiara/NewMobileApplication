import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Details from '../screens/Details';

const Stack = createNativeStackNavigator();

export default function StackDemo() {
  return (
    <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen 
        name="Details" 
        component={Details}
        options={({ route }) => ({ title: `Details #${route.params?.id ?? ''}` })}
      />
    </Stack.Navigator>
  );
}