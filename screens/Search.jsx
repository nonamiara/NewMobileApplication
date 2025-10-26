import { View, TextInput, Text, useState } from 'react-native';
import { useState as ReactUseState } from 'react';

export default function Search() {
  const [query, setQuery] = ReactUseState('');
  return (
    <View style={{ flex:1, alignItems:'center', justifyContent:'center' }}>
      <TextInput
        style={{ borderWidth:1, width:'80%', padding:8, marginBottom:10 }}
        placeholder="Type something..."
        value={query}
        onChangeText={setQuery}
      />
      <Text>Searching for: {query}</Text>
    </View>
  );
}