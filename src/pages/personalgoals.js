import React from 'react';
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

//assets
import bg from '../assets/bg.png';
import Icon from 'react-native-vector-icons/Ionicons'; 

export default function Dashboard({ route }) {
  const navigation = useNavigation();

  const handleButtonPress = (goalType) => {
    // Navigate to PersonalGoalsWeight screen with the selected goal type
    navigation.navigate('PersonalWeight', { ...route.params, sports: goalType });
  };

  const goBackToGoals = () => {
    // back to goals screen
    navigation.navigate('Goals');
  };

  return (
    <ImageBackground
      source={bg}
      style={styles.container}
    >
      <View style={styles.overlay}>
        <TouchableOpacity style={styles.backButton} onPress={goBackToGoals}>
          <Icon name="arrow-back" style={styles.backButtonIcon} />
        </TouchableOpacity>

        <Text style={styles.questionText}>How often do you do sports?</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.goalButton}
            onPress={() => handleButtonPress('Rarely')}
          >
            <Text style={styles.goalButtonLabel}>Rarely</Text>
            <Text style={styles.goalButtonLabel2}> 1 day</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.goalButton}
            onPress={() => handleButtonPress('Normal')}
          >
            <Text style={styles.goalButtonLabel}>Normal</Text>
            <Text style={styles.goalButtonLabel2}>2-3 days</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.goalButton}
            onPress={() => handleButtonPress('Often')}
          >
            <Text style={styles.goalButtonLabel}>Often</Text>
            <Text style={styles.goalButtonLabel2}>4-5 days</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.goalButton}
            onPress={() => handleButtonPress('Always')}
          >
            <Text style={styles.goalButtonLabel}>Always</Text>
            <Text style={styles.goalButtonLabel2}>Everyday</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center', // Center the content vertically
    alignItems: 'center', // Center the content horizontally
  },

  backButton: {
    position: 'absolute',
    top: 30,
    left: 20,
    padding: 10,
    zIndex: 1,
  },

  backButtonIcon: {
    fontSize: 24,
    color: 'white',
  },

  questionText: {
    fontSize: 20,
    color: 'white',
    marginBottom: 20,
  },

  buttonContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 20,
  },

  goalButton: {
    backgroundColor: '#8BADD3',
    height: 80,
    width: 200,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center', // Center the text vertically
    marginVertical: 10,
  },

  goalButtonLabel: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center', // Center the text horizontally
  },

  goalButtonLabel2: {
    fontSize: 11,
    color: '#333',
    textAlign: 'center', // Center the text horizontally
  },
});
