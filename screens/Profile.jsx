import { View, Text, Button } from 'react-native';

export default function Profile({ navigation }) {
  return (
    <View style={{ flex:1, alignItems:'center', justifyContent:'center' }}>
      <Text style={{ fontSize:18 }}>Profile Tab</Text>
      <Button
        title="Open Details (Stack)"
        onPress={() =>
          navigation.navigate('Browse (Stack)', {
            screen: 'Details',
            params: { id: 99 },
          })
        }
      />
    </View>
  );
}