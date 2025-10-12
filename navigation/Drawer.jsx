import { createDrawerNavigator } from '@react-navigation/drawer';
import TabsDemo from './Tabs';
import StackDemo from './Stack';
import About from '../screens/About';
import Settings from '../screens/Settings';

const Drawer = createDrawerNavigator();

export default function DrawerDemo() {
  return (
    <Drawer.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
      <Drawer.Screen name="Home (Tabs)" component={TabsDemo} />
      <Drawer.Screen name="Browse (Stack)" component={StackDemo} />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
}
