import React, { useState } from 'react';
import { StyleSheet, View, Text, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// assets
import bg from '../assets/bg.png';
import Icon from 'react-native-vector-icons/Ionicons'; // Import from react-native-vector-icons


export default function PersonalAge({ route }) {
  const navigation = useNavigation();
  const [userinput, setCustom] = useState('');
  const [error, setError] = useState('');

  const setCustomGoal = () => {
    // Check if userinput is empty
    if (!userinput) {
      setError('Please enter your age.');
      return;
    }

    // Clear any previous error
    setError('');

    // Pass the custom goal to the Dashboard screen
    navigation.navigate('PersonalDailyGoal', { ...route.params, age: userinput });
  };

  const goBackToPersonalWeight = () => {
    // Navigate back to the PersonalWeight screen
    navigation.navigate('PersonalWeight');
  };

  return (
    <ImageBackground source={bg} style={styles.container}>
      <View style={styles.overlay}>
        <TouchableOpacity style={styles.backButton} onPress={goBackToPersonalWeight}>
          <Icon name="arrow-back" style={styles.backButtonIcon} />
        </TouchableOpacity>
        <View style={styles.inputContainer}>
          <View style={styles.inputBox}>
            <TextInput
              style={[styles.textInput, !userinput && styles.placeholder]}
              placeholder="Enter your Age"
              onChangeText={(text) => {
                text = text.replace(/[^0-9]/g, '').slice(0, 2);
                setCustom(text);
              }}
              value={userinput}
              keyboardType="numeric"
            />
            <Text style={styles.kgText}>YEARS</Text>
          </View>

          <TouchableOpacity
            style={styles.addButton}
            onPress={setCustomGoal}
          >
            <Text style={styles.addButtonLabel}>Next</Text>
          </TouchableOpacity>

          {error ? <Text style={styles.errorText}>{error}</Text> : null}
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

  inputContainer: {
    alignItems: 'center',
    top: 300,
    marginBottom: 30,
    paddingHorizontal: 70,
    paddingVertical: 20,
  },

  inputBox: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderColor: 'white',
    alignItems: 'center',
  },

  textInput: {
    flex: 1,
    fontSize: 20,
    color: 'white',
    paddingVertical: 10,
  },

  // 
  placeholder: {
    color: 'gray',
  },

  // kg
  kgText: {
    color: 'white',
    fontSize: 18,
  },

  addButton: {
    backgroundColor: '#8BADD3',
    paddingVertical: 23,
    paddingHorizontal: 50,
    borderRadius: 10,
    top: 130,
    alignItems: 'center',
  },

  addButtonLabel: {
    fontSize: 18,
    color: '#333',
  },

  // Error message text
  errorText: {
    color: 'red',
    marginTop: 10,
  },
});
