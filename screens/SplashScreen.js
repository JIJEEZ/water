import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from "react-native";
import React from "react";

import logodrink from "../assets/logotrans.png"
import bg from '../assets/bg.png';

const SplashScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={bg} style={styles.backgroundImage} >
                <View style={styles.overlay}>
                    <View style={styles.appContainer}>
                        <Image source={logodrink} style={styles.logo} />
                        <Text style={styles.headerMotto2}>Hydrate Your Way to Health!</Text>
                        <Text style={styles.headerMotto3}>Drinking tubig kasi </Text>
                        <Text style={styles.headerMotto3}>di na muling iibig 🥹</Text>
                        <Text style={styles.headerMotto3}>-Arwen 2023</Text>
                        <TouchableOpacity
                            style={styles.addButton}
                            onPress={() => navigation.navigate('Account')}>
                            <Text style={styles.addButtonLabel}>Get Started</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

export default SplashScreen;

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
        paddingTop: 50,
        paddingBottom: 50,
        paddingHorizontal: 16,
        alignItems: 'center',

    },

    //baboy na umiinom
    logo: {
        height: 170, // size nung logo
        width: 170, // size nung loge
        top: 120,
        alignItems: 'center',

    },

    //Hydrate Your Way to Health!
    headerMotto2: {
        fontSize: 26,
        fontWeight: 'bold',
        color: "white",
        top: 140,
    },

    //-Arwen
    headerMotto3: {
        fontSize: 19,
        color: "white",
        top: 160,
    },

    //get started button
    addButton: {
        backgroundColor: '#8BADD3',
        paddingVertical: 23,
        paddingHorizontal: 70,
        borderRadius: 10,
        top: 200,
        alignItems: 'center',
    },

    //Get Started Text
    addButtonLabel: {
        fontSize: 23,
        color: '#333', // Text color
    },
});
