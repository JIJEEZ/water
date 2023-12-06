//history.js

import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  StyleSheet,
} from 'react-native';

import DehazeIcon from '@mui/icons-material/Dehaze';
import { Modal } from 'react-native';



//assets
import logodrink from '../assets/logotrans.png';
import bg from '../assets/bg.png';

export default function Dashboard({ navigation }) {

  const [isModalVisible, setModalVisible] = useState(false);


  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const closeSlideInModal = () => {
    setModalVisible(false);
  };

  const navigateToDashboard = () => {
    setModalVisible(false); // Close the modal
    navigation.navigate('Dashboard'); // Navigate to the Dashboard screen
  };

  const navigateToHistory = () => {
    setModalVisible(false); // Close the modal
    navigation.navigate('History'); // Navigate to the History screen
  };

  const navigateToSettings = () => {
    setModalVisible(false); // Close the modal
    navigation.navigate('Settings'); // Navigate to the Settings screen
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={bg} style={styles.backgroundImage}>
        <View style={styles.overlay}>
          <View style={styles.appContainer}>
          <Text style={styles.headerMotto2}>WATER REMINDER</Text>
            <Text style={styles.headerMotto3}>IT'S TIME TO DRINK WATER!</Text>
          <Image source={logodrink} style={styles.logo} />
            <View style={styles.headerContainer}>
            
             <TouchableOpacity style={styles.button} onPress={scheduleReminder}>
                <Text style={styles.buttonText}>Schedule Reminder   </Text>
              </TouchableOpacity>
            </View>
           
           
            
          </View>
        </View>
      </ImageBackground>
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
    bottom:450,
    
    paddingHorizontal: 10,
  },
  logo: {
    height: 170, // size nung logo
    width:170, // size nung loge
    bottom: 300,
    alignItems: 'center',
    
  },
  header: {
    fontSize: 20,
    marginBottom: 10,
    color: 'white',
  },
  //(HOME)started
  headerMotto2: {
    fontSize: 24,
    fontWeight: 'bold',
    color: "white",
    top: 50,
  },

  //Stay hydrated
  headerMotto3: {
    fontSize: 15,
    color: "white",
    top: 60,
   
    
  },
  meterContainer: {
    height: 300,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  meter: {
    width: 200,
    height: 200,
    backgroundColor: 'lightgray',
    borderRadius: 100,
    overflow: 'hidden',
  },
  fill: {
    width: '100%',
    backgroundColor: 'blue',
    position: 'absolute',
    bottom: 0,
  },
  consumedText: {
    fontSize: 18,
    marginTop: 10,
    color: 'white',
  },
  goalText: {
    fontSize: 16,
    marginTop: 10,
    color: 'white',
  },
  touchableWaterBottle: {
    width: 80,
    height: 160,
    marginTop: 20,
  },
  messageText: {
    fontSize: 18,
    color: 'green',
    marginTop: 10,
  },
  historyContainer: {
    maxHeight: 200,
    width: 230,
    marginTop: 20,
    borderWidth: 1,
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 10,
  },
  historyRecord: {
    marginBottom: 10,
    color: 'white',
  },
  historyDate: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  historyText: {
    fontSize: 16,
    color: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    flex: 1,
    backgroundColor: '#8BADD3',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    margin: 5,
  },

  welcomeText: {
    color: 'white',
    fontSize: 30,
  },

  modalText2: {
    color: 'white',
    fontSize: 18,
  },

  buttonText: {
    color: '#333',
    fontSize: 18,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalText: {
    fontSize: 24,
    color: 'white',
    marginBottom: 20,
  },
});
