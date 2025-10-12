import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feed from '../screens/Feed';
import Search from '../screens/Search';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

export default function TabsDemo() {
  return (
    <Tab.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}