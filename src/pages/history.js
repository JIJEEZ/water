//history.js

import React, { useState } from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { LineChart } from 'react-native-chart-kit';

//import logodrink from '../assets/logotrans.png';
import bg from '../assets/bg.png';

export default function History({ navigation }) {
  const [selectedDate, setSelectedDate] = useState('');
  const [chartData, setChartData] = useState([0, 0, 0, 0, 0, 0, 0]); // Modify the initial chart data

  const handleDateSelect = (day) => {
    console.log('Selected date:', day.dateString);
    // TODO: Fetch your chart data based on the selected date
    // Replace the following line with your data fetching logic
    setChartData([100, 150, 120, 160, 130, 160, 140]); // Dummy data, replace with your actual data
    setSelectedDate(day.dateString);
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={bg} style={styles.backgroundImage}>
        <View style={styles.overlay}>
          <View style={styles.appContainer}>
            <Text style={styles.headerMotto2}>Water Intake History</Text>
            <Text style={styles.headerMotto3}>Keep track of your thirsts</Text>
            <View style={styles.contentContainer}>
              <View style={styles.headerContainer}></View>
              <View style={styles.calendarContainer}>
                <Text style={styles.selectedDateText}>{selectedDate}</Text>
                <Calendar
                  onDayPress={(day) => handleDateSelect(day)}
                  markingType={'period'}
                  markedDates={{
                    '2023-01-01': { selected: true, marked: true },
                    '2023-01-02': { selected: true, marked: true },
                    '2023-01-03': { selected: true, marked: true },
                  }}
                />
              </View>
              <View style={styles.chartContainer}>
                <LineChart
                  data={{
                    labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
                    datasets: [
                      {
                        data: chartData,
                      },
                    ],
                  }}
                  width={300}
                  height={200}
                  yAxisLabel=""
                  yAxisSuffix=""
                  yAxisInterval={1}
                  chartConfig={{
                    backgroundColor: 'rgba(255, 255, 255, 0.7)',
                    backgroundGradientFrom: 'rgba(255, 255, 255, 0.7)',
                    backgroundGradientTo: 'rgba(255, 255, 255, 0.7)',
                    decimalPlaces: 0,
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    style: {
                      borderRadius: 16,
                    },
                    propsForDots: {
                      r: '7',
                      strokeWidth: '2',
                      stroke: '#ffa726',
                    },
                  }}
                  bezier
                  style={{
                    marginVertical: 8,
                    borderRadius: 16,
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  appContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: 'white',
    left: -165,
    paddingHorizontal: 10,
  },
  headerMotto2: {
    fontSize: 25,
    color: 'white',
    top: 20,
  },
  headerMotto3: {
    fontSize: 15,
    color: 'white',
    top: 30,
  },
  contentContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  calendarContainer: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 30,
    alignItems: 'center',
  },
  selectedDateText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
  },
  chartContainer: {
    marginTop: 40,
    borderRadius: 10,
    padding: 20,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
});
