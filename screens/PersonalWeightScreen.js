import React, { useState } from 'react';
import { StyleSheet, View, Text, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// assets
import bg from '../assets/bg.png';
import Icon from 'react-native-vector-icons/Ionicons';

const PersonalWeightScreen = ({ route }) => {
    const navigation = useNavigation();
    const [userinput, setCustom] = useState('');
    const [error, setError] = useState('');

    const setCustomGoal = () => {
        // Check if userinput is empty
        if (!userinput) {
            setError('Please enter your weight.');
            return;
        }

        // Clear any previous error
        setError('');

        // Pass the custom goal to the PersonalAge screen
        navigation.navigate('Age', { ...route.params, weight: parseFloat(userinput) });
    };

    const goBackToPersonal = () => {
        // Navigate back to the Personal screen
        navigation.navigate('Personal');
    };

    return (
        <ImageBackground source={bg} style={styles.container}>
            <View style={styles.overlay}>
                <TouchableOpacity style={styles.backButton} onPress={goBackToPersonal}>
                    <Icon name="arrow-back" style={styles.backButtonIcon} />
                </TouchableOpacity>
                <View style={styles.inputContainer}>
                    <View style={styles.inputBox}>
                        <TextInput
                            style={[styles.textInput, !userinput && styles.placeholder]}
                            placeholder="Enter your Weight"
                            onChangeText={(text) => {
                                // Allow only numbers with a decimal point
                                text = text.replace(/[^0-9.]/g, '');
                                setCustom(text);
                            }}
                            value={userinput}
                            keyboardType="numeric"
                        />
                        <Text style={styles.kgText}>KG</Text>
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
};

export default PersonalWeightScreen;

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
