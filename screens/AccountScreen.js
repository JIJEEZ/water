import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, Alert, ImageBackground, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

import { db } from '../config';
import { doc, setDoc, getDoc } from 'firebase/firestore'; // Import necessary functions

import logodrink from '../assets/logotrans.png';
import bg from '../assets/bg.png';

const AccountScreen = ({ navigation }) => {

    const [username, setUsername] = useState('');

    const handleUsernameChange = (text) => {
        setUsername(text);
    };

    const saveUsername = async () => {
        try {
            // Check if the user document exists
            const userDoc = doc(db, 'users', username);
            const userSnapshot = await getDoc(userDoc);

            if (userSnapshot.exists()) {
                // User exists
                Alert.alert('Welcome back!');
                navigation.navigate('Goal', { username })
            } else {
                // User does not exist, create a new user
                await setDoc(userDoc, {});
                Alert.alert('User successfully created!');
                navigation.navigate('Goal', { username })
            }
        } catch (error) {
            console.error('Error checking/saving username: ', error);
            Alert.alert('Error checking/saving username. Please try again.');
        }
    };

    return (
        <KeyboardAvoidingView style={styles.safeContainer}>
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
                                    placeholder="Enter your Username"
                                    value={username}
                                    onChangeText={handleUsernameChange}
                                />
                            </View>
                        </View>

                        <TouchableOpacity style={styles.addButton} onPress={saveUsername}>
                            <Text style={styles.addButtonLabel}>Let's Go!</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </KeyboardAvoidingView>
    );
};

export default AccountScreen;

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
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
        width: 170, // size nung loge
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
        alignItems: 'center',

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