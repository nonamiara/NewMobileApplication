import React, { useState } from 'react';
import { SafeAreaView, View, Text, Button, TextInput, StyleSheet,TouchableOpacity } from 'react-native';
import { useStore } from './state/useStore';

export default function App() {
  const count = useStore(s => s.count);
  const inc = useStore(s => s.inc);
  const dec = useStore(s => s.dec);

  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  const user = useStore(s => s.user);
  const setUser = useStore(s => s.setUser);

  const theme = useStore(s => s.theme);
  const toggleTheme = useStore(s => s.toggleTheme);


  return (
    <SafeAreaView style={[styles.container, theme === 'dark' && styles.dark]}>
      <View>
        <Text style={[styles.title, theme === 'dark' && styles.darkText]}>
          Zustand Demo
        </Text>

        {/* Counter */}
        <Text style={[styles.label, theme === 'dark' && styles.darkText]}>
          Count: {count}
        </Text>
        <View style={styles.row}>
          <Button title="−" onPress={dec} />
          <View style={{ width: 12 }} />
          <Button title="+" onPress={inc} />
        </View>

        {/* Second Counter (useState) */}
        <Text style={[styles.label, theme === 'dark' && styles.darkText]}>
          Count 2: {count2}
        </Text>
        <View style={styles.row}>
          <Button title="−" onPress={() => setCount2(count2 - 1)} />
          <View style={{ width: 12 }} />
          <Button title="+" onPress={() => setCount2(count2 + 1)} />
        </View>

         <Text style={[styles.label, theme === 'dark' && styles.darkText]}>
          Count 3: {count3}
        </Text>
        <View style={styles.row}>
          <Button title="−" onPress={() => setCount3(count3 - 1)} />
          <View style={{ width: 12 }} />
          <Button title="+" onPress={() => setCount3(count3 + 1)} />
        </View>

        <View>
         <TouchableOpacity
      style={{
        backgroundColor: `rgb(${count}, ${count2}, ${count3})`, // Tomato color
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
      }}
      onPress={() => console.log('Button pressed!')}
    >
      <Text style={{ color: 'white', fontSize: 16 }}>Press Me</Text>
    </TouchableOpacity>
        </View>
        {/* User */}
        <Text style={[styles.label, theme === 'dark' && styles.darkText]}>
          User: {user?.name ?? 'guest'}
        </Text>
        <TextInput
          placeholder="Type a name…"
          onChangeText={(name) => setUser(name ? { id: 1, name } : null)}
          style={[styles.input, theme === 'dark' && styles.inputDark]}
          placeholderTextColor={theme === 'dark' ? '#aaa' : '#666'}
        />

        {/* Theme */}
        <View style={{ height: 16 }} />
        <Button
          title={`Toggle theme (now: ${theme})`}
          onPress={toggleTheme}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', backgroundColor: '#fff' },
  dark: { backgroundColor: '#111' },
  title: { fontSize: 24, fontWeight: '700', marginBottom: 20, color: '#111' },
  darkText: { color: '#f2f2f2' },
  label: { fontSize: 18, marginVertical: 12, color: '#222' },
  row: { flexDirection: 'row', alignItems: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 8, color: '#111' },
  inputDark: { borderColor: '#333', color: '#f2f2f2', backgroundColor: '#1b1b1b' },
});