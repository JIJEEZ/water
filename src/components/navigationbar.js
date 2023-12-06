import React, { useState } from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView, ImageBackground, StyleSheet, Modal} from 'react-native';
// Navigating to HistoryScreen from another component

//assets
import HomeIcon from '@mui/icons-material/Home';
import DehazeIcon from '@mui/icons-material/Dehaze';


export default function NavigationBar(navigation) {

const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const closeSlideInModal = () => {
    setModalVisible(false);
  };

  // Navigate to Dashboard 
  const navigateToDashboard = () => {
    setModalVisible(false); // Close modal
    navigation.navigate('Dashboard'); 
  };

  // Navigate to History 
  const navigateToHistory = () => {
    closeHeaderModal();
    setModalVisible(false); // Close modal
    navigation.navigate('History', { username }); // Pass the username as a parameter
  };

  // Navigate to Settings
  const navigateToSettings = () => {
    setModalVisible(false); // Close modal
    navigation.navigate('Settings');  
  };

        return(

            <Modal
            transparent={true}
            visible={isModalVisible}
            onBackdropPress={closeSlideInModal}
            animationIn="slideInLeft"
            animationOut="slideOutLeft"
            onRequestClose={toggleModal}
            >
            <View style={styles.modalContainer}>
            <Text style={styles.welcomeText}>Welcome</Text>
            <TouchableOpacity onPress={navigateToDashboard}>
                <Text style={styles.modalText2}>Dashboard</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateToHistory}>
                <Text style={styles.modalText2}>History</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateToSettings}>
                <Text style={styles.modalText2}>Settings</Text>
            </TouchableOpacity>
            </View>
            </Modal>
        );
}