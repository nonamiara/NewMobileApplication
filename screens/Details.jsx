import { View, Text, Button } from 'react-native';

export default function Details({ route, navigation }) {
  const { id } = route.params ?? {};
  return (
    <View style={{ flex:1, alignItems:'center', justifyContent:'center' }}>
      <Text style={{ fontSize:20 }}>Details ID: {id}</Text>
      <Button title="Increment ID" onPress={() => navigation.setParams({ id: (id ?? 0) + 1 })}/>
      <Button title="Go Back" onPress={() => navigation.goBack()}/>
    </View>
  );
}