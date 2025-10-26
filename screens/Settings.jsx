import { useState } from 'react';
import { View, Text, Switch } from 'react-native';

export default function Settings() {
  const [dark, setDark] = useState(false);
  return (
    <View style={{ flex:1, alignItems:'center', justifyContent:'center' }}>
      <Text>Dark Mode: {dark ? 'On' : 'Off'}</Text>
      <Switch value={dark} onValueChange={setDark}/>
    </View>
  );
}