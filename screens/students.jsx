import React from 'react';
import { View, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

export default function App() {
  const screenWidth = Dimensions.get('window').width;

  const studentsData = [
    { name: 'Anna', score: 85 },
    { name: 'Ben', score: 78 },
    { name: 'Catherine', score: 92 },
    { name: 'Daniel', score: 68 },
    { name: 'Ella', score: 95 },
  ];

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <LineChart
        data={{
          labels: studentsData.map(s => s.name),
          datasets: [
            {
              data: studentsData.map(s => s.score),
            },
          ],
        }}
        width={screenWidth - 30}
        height={220}
        yAxisSuffix="pts"
        chartConfig={{
          backgroundColor: '#ffffff',
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          decimalPlaces: 0,
          color: (opacity = 1) => rgba(0, 0, 255, ${opacity}),
          labelColor: (opacity = 1) => rgba(0, 0, 0, ${opacity}),
          propsForDots: {
            r: '5',
            strokeWidth: '2',
            stroke: '#0000ff',
          },
        }}
        bezier
        style={{ borderRadius: 12 }}
      />
    </View>
  );
}