import { View, Text, Button } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={{ flex:1, alignItems:'center', justifyContent:'center' }}>
      <Text style={{ fontSize:22 }}>Home Screen</Text>
      <Button
        title="Go to Details (id=42)"
        onPress={() => navigation.navigate('Details', { id: 42 })}
      />
    </View>
  );
}