import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';

export default function App() {
  const screenWidth = Dimensions.get('window').width;

  const studentsData = [
    { id: 1, name: 'John Doe', age: 20, grade: 'A', major: 'Computer Science' },
    { id: 2, name: 'Jane Smith', age: 22, grade: 'B+', major: 'Mathematics' },
    { id: 3, name: 'Bob Johnson', age: 21, grade: 'A-', major: 'Physics' },
    { id: 4, name: 'Alice Williams', age: 19, grade: 'A', major: 'Engineering' },
    { id: 5, name: 'Charlie Brown', age: 23, grade: 'B', major: 'Business' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Students Table</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={[styles.table, { width: screenWidth - 20 }]}>
          {/* Header */}
          <View style={[styles.row, styles.headerRow]}>
            <Text style={[styles.cell, styles.headerCell, { flex: 0.5 }]}>ID</Text>
            <Text style={[styles.cell, styles.headerCell]}>Name</Text>
            <Text style={[styles.cell, styles.headerCell]}>Age</Text>
            <Text style={[styles.cell, styles.headerCell]}>Grade</Text>
            <Text style={[styles.cell, styles.headerCell, { flex: 1.5 }]}>Major</Text>
          </View>

          {/* Data Rows */}
          {studentsData.map((student, index) => (
            <View
              key={student.id}
              style={[
                styles.row,
                { backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#ffffff' },
              ]}
            >
              <Text style={[styles.cell, { flex: 0.5 }]}>{student.id}</Text>
              <Text style={styles.cell}>{student.name}</Text>
              <Text style={styles.cell}>{student.age}</Text>
              <Text style={styles.cell}>{student.grade}</Text>
              <Text style={[styles.cell, { flex: 1.5 }]}>{student.major}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f7fa',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 15,
    color: '#2a5d84',
  },
  table: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
  },
  headerRow: {
    backgroundColor: '#2a5d84',
  },
  cell: {
    flex: 1,
    padding: 10,
    fontSize: 15,
    textAlign: 'center',
  },
  headerCell: {
    color: 'white',
    fontWeight: '600',
  },
});
