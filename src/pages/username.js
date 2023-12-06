// username.js

import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, ImageBackground, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

// assets
import logodrink from '../assets/logotrans.png';
import bg from '../assets/bg.png';

import database from '../authentication/firebase'; 
import { ref, push } from 'firebase/database';



export default function Goals({ navigation }) {
  const [username, setUsername] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  useEffect(() => {
  }, []); 
  const handleContinue = () => {
    if (username.trim() === '') {
      // If username is empty, display an error message
      setErrorMessage('Please enter a username.');
    } else {
      // If a username is entered, proceed to the next screen and save to Firebase
      setErrorMessage(''); // Clear any previous error message
  
      // Save the username to Firebase
      const userRef = ref(database, 'users'); 
      push(userRef, { username }); // Save the username to Firebase
  
      navigation.navigate('Goals');
    }
  };

  return (
    <KeyboardAvoidingView 
    style={styles.safeContainer}>
    <ImageBackground source={bg} style={styles.container}>
      <View style={styles.overlay}>
        <View style={styles.appContainer}>
          <Image source={logodrink} style={styles.logo} />
          <Text style={styles.headerMotto2}>Are you ready for ThirstApp?</Text>
          <Text style={styles.headerMotto3}>First, what should we call you?</Text>

          <View style={styles.inputContainer}>
            <View style={styles.inputBox}>
              <TextInput
                style={styles.textInput}
                placeholder="    Enter your Username"
                onChangeText={(text) => setUsername(text)}
                value={username}
              />
            </View>
            {errorMessage !== '' && <Text style={styles.errorText}>{errorMessage}</Text>}
          </View>

          <TouchableOpacity style={styles.addButton} onPress={handleContinue}>
            <Text style={styles.addButtonLabel}>Let's Go!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
    </KeyboardAvoidingView>
  );
}


const styles = StyleSheet.create({
  safeContainer: {
    flex:1,
  },
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
    paddingTop: 50,
    paddingBottom: 50,
    paddingHorizontal: 16,
    alignItems: 'center',
    
  },

  //baboy na umiinom
  logo: {
    height: 170, // size nung logo
    width:170, // size nung loge
    top: 55,
    alignItems: 'center',
    
  },
 
  // Are you ready for ThirstApp
  headerMotto2: {
    fontSize: 24,
    fontWeight: 'bold',
    color: "white",
    top: 50,
  },

  //First, what should we call you?
  headerMotto3: {
    fontSize: 20,
    color: "white",
    top: 70,
  },

  inputContainer: {
    alignItems: 'center',
    top: 150,
    marginBottom: 5,
    alignItems: 'center',
    // paddingHorizontal: 80,
    // paddingVertical: 1,
  },

  inputBox: {
    borderWidth: 0,
    borderColor: 'white',
    borderRadius: 6,
    // paddingHorizontal: 8,
    // paddingVertical: 8,
  },

  //user input
  textInput: {
    // flex: 1,
    fontSize: 20,
    marginRight: 10,
    borderBottomWidth: 2,
    color: 'gray',
    borderColor: 'white',
    // paddingVertical: 0,
    // paddingHorizontal:10,
    alignContent: 'center',
  },

  //Let's Go
  addButton: {
    backgroundColor: '#8BADD3', 
    paddingVertical: 23,
    paddingHorizontal: 70,
    borderRadius: 10,
    top: 180,
    alignItems:'center',
    
  },

  //text sa button
  addButtonLabel: {
    fontSize: 23,
    color: '#333', // Text color
  },

  // Error message text
  errorText: {
    color: 'red',
    marginTop: 10,
  },


});