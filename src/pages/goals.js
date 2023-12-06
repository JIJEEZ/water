//goals.js
import React from 'react';
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity, Image } from 'react-native';
import bot from '../assets/bot.png'
import logodrink from '../assets/logotrans.png'
import bg from '../assets/bg.png';

export default function Dashboard({ navigation }) {
  // Create an array of bottle images with their corresponding labels
  const bottles = [
    { image: bot, label: '1 L' },
    { image: bot, label: '1.5 L' },
    { image: bot, label: '2 L' },
    { image: bot, label: '2.5 L' },
    { image: bot, label: '3 L' },
    { image: bot, label: 'Custom' },
    // Add more bottles with images and labels as needed
  ];

  // Helper function to chunk the bottles into a 3x2 grid
  const chunkArray = (myArray, chunkSize) => {
    const arrayLength = myArray.length;
    const tempArray = [];
    for (let index = 0; index < arrayLength; index += chunkSize) {
      const myChunk = myArray.slice(index, index + chunkSize);
      tempArray.push(myChunk);
    }
    return tempArray;
  };

  const bottleGrid = chunkArray(bottles, 3); // Create a 3x2 grid of bottles

  return (
    <View style={styles.container}>
    <ImageBackground
      source={bg}
      style={styles.container}
    >
      <View style={styles.overlay}>
        <View style={styles.headerContainer}>
          <View style={styles.logoContainer}>
            <Image
              source={logodrink}
              style={styles.logo}
            />
          </View>
          <Text style={styles.headerText}>Choose Your Drinking Goal</Text>
        </View>

        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate('Personal')}
        >
          <Text style={styles.addButtonLabel}>
            Setup your personal water
          </Text>
          <Text style={styles.addButtonLabel}>
            requirement in four steps
          </Text>
        </TouchableOpacity>

        <View style={styles.bottleGrid}>
          {bottleGrid.map((row, rowIndex) => (
            <View key={rowIndex} style={styles.bottleRow}>
              {row.map((bottle, colIndex) => (
                <TouchableOpacity
                  key={colIndex}
                  style={styles.bottleContainer}
                  onPress={() => {
                    if (bottle.label === 'Custom') {
                      // Navigate to the CustomGoal screen
                      navigation.navigate('Custom');
                    } else {
                      // Handle other bottles or add navigation logic here
                      navigation.navigate('Dashboard', { selectedBottleSize: bottle.label });
                    }
                  }}
                >
                  <Image source={bottle.image} style={styles.bottle} />
                  <Text style={styles.bottleLabel}>{bottle.label}</Text>
                </TouchableOpacity>
              ))}
            </View>
          ))}
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
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -200,
    marginLeft: 20,
  },
  logoContainer: {
    marginRight: 10,
  },
  logo: {
    height: 140,
    width: 140,
  },
  headerText: {
    fontSize: 30,
    
    color: 'white',
  },
  inputContainer: {
    alignItems: 'center',
    bottom: 40,
    marginBottom: 30,
    paddingHorizontal: 50,
    paddingVertical: 10,
  },
  addButton: {
    backgroundColor: '#8BADD3',
    paddingVertical: 30,
    paddingHorizontal: 30,
    borderRadius: 30,
    bottom: 170,
    alignItems: 'center',
  },
  addButtonLabel: {
    fontSize: 15,
    color: '#333',
   
  },
  bottleGrid: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 130,
  },
  bottleRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottleContainer: {
    alignItems: 'center',
  },
  bottle: {
    height: 90,
    width: 90,
    margin: 20,
  },
  bottleLabel: {
    fontSize: 16,
    
    color: 'white',
  },
});