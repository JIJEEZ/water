//dashboard.js

import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, ImageBackground, StyleSheet, Modal, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';


//assets
import bg from '../assets/bg.png';
import bottle from '../assets/bottle.png';

export default function Dashboard({ navigation, route }) {
  // Get the selected bottle size from the navigation parameters
  const selectedBottleSize = route.params ? route.params.selectedBottleSize : '1 L';

  // Goals.js - define daily goals based on selected bottle
  const dailyGoals = {
    '1 L': 1000,
    '1.5 L': 1500,
    '2 L': 2000,
    '2.5 L': 2500,
    '3 L': 3000,
    'Custom': 0,
  };


  // Use the custom goal if available, otherwise use the default
  const customGoal = route.params ? route.params.customGoal : null;
  const dailyGoal = customGoal ? parseFloat(customGoal, 10) : dailyGoals[selectedBottleSize];




  const increment = 250;
  const [consumedWater, setConsumedWater] = useState(0);
  const [message, setMessage] = useState(null);
  const [consumptionHistory, setConsumptionHistory] = useState([]);
  const [meterFill, setMeterFill] = useState(0);
  const [isHeaderModalVisible, setHeaderModalVisible] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [reminderTime, setReminderTime] = useState('');
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const [showTimePicker, setShowTimePicker] = useState(false);



  const addWater = () => {
    const newConsumedWater = consumedWater + increment;
    setConsumedWater(newConsumedWater);

    const fillPercentage = (newConsumedWater / dailyGoal) * 100;
    setMeterFill(fillPercentage);

    if (newConsumedWater >= dailyGoal) {
      setMessage("You've reached your daily goal!");
    }

    // Add a new record to the consumption history
    const time = new Date().toLocaleTimeString();
    const newRecord = `${time} +${increment} ml`;
    setConsumptionHistory([newRecord, ...consumptionHistory]);
  };

  const toggleHeaderModal = () => {
    setHeaderModalVisible(!isHeaderModalVisible);
  };

  const closeHeaderModal = () => {
    setHeaderModalVisible(false);
  };

  const setReminder = () => {
    // Set Reminder
    setModalVisible(true);
  };
  const handleTimePicker = () => {
    setShowTimePicker(true);
  };
  const handleTimeChange = (event, selectedTime) => {
    if (selectedTime) {
      const formattedTime = `${selectedTime.getHours()}:${selectedTime.getMinutes()}`;
      setReminderTime(formattedTime);
    }

    setShowTimePicker(false);
  };
  const closeModal = () => {
    setModalVisible(false);
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const closeSlideInModal = () => {
    setModalVisible(false);
  };

  // Navigate to Dashboard 
  const navigateToDashboard = () => {
    closeHeaderModal();
    setModalVisible(false); // Close modal
    navigation.navigate('TabScreens', { screen: 'Dashboard' });
  };

  // Navigate to History 
  const navigateToHistory = () => {
    closeHeaderModal();
    setModalVisible(false); // Close modal
    navigation.navigate('History');
  };

  // Navigate to Settings
  const navigateToSettings = () => {
    closeHeaderModal();
    setModalVisible(false); // Close modal
    navigation.navigate('Settings');
  };

  const navigateToGoals = () => {
    closeHeaderModal();
    setModalVisible(false); // Close the modal
    navigation.navigate('Goals'); // Navigate to the "Goals" screen
  };





  return (
    <View style={styles.container}>
      <ImageBackground source={bg} style={styles.backgroundImage}>
        <View style={styles.overlay}>
          <View style={styles.appContainer}>
            <View style={styles.headerContainer}>

            </View>
          </View>

          <Text style={styles.header}>Quench Your Thws</Text>
          <View style={styles.meterContainer}>
            <View style={styles.meter}>
              <View style={[styles.fill, { height: `${meterFill}%` }]} />
            </View>
          </View>
          <Text style={styles.consumedText}>{consumedWater} ml</Text>
          <Text style={styles.goalText}>Goal: {dailyGoal} ml</Text>
          <TouchableOpacity onPress={addWater}>
            <Image source={bottle} style={styles.touchableWaterBottle} />
          </TouchableOpacity>
          {message && <Text style={styles.messageText}>{message}</Text>}
          <ScrollView style={styles.historyContainer}>
            <View style={styles.historyRecord}>
              <Text style={styles.historyDate}>

                {new Date().toLocaleDateString(undefined, options)}
              </Text>
            </View>
            {consumptionHistory.map((record, index) => (
              <View key={index} style={styles.historyRecord}>
                <Text style={styles.historyText}>{record}</Text>
              </View>
            ))}
          </ScrollView>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={setReminder}>
              <Text style={styles.buttonText}>Set Reminder</Text>
            </TouchableOpacity>
          </View>

          <Modal
            transparent={true}
            visible={isHeaderModalVisible}
            onBackdropPress={closeSlideInModal}
            animationIn="slideInLeft"
            animationOut="slideOutLeft"
            onRequestClose={toggleModal}
          >
            <View style={styles.modalContainer1}>
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
          <Modal visible={isModalVisible} animationType="slide" transparent={true}>
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text style={styles.modalText3}>Set Reminder Time</Text>
                <View style={styles.pickerContainer}>
                  <Picker
                    selectedValue={reminderTime}
                    onValueChange={(itemValue) => setReminderTime(itemValue)}
                    style={styles.picker}
                  >
                    <Picker.Item label="Select Time" value="" />
                    <Picker.Item label="12:00 AM" value="0:00" />
                    <Picker.Item label="1:00 AM" value="1:00" />
                    <Picker.Item label="2:00 AM" value="2:00" />
                    <Picker.Item label="3:00 AM" value="3:00" />
                    <Picker.Item label="4:00 AM" value="4:00" />
                    <Picker.Item label="5:00 AM" value="5:00" />
                    <Picker.Item label="6:00 AM" value="6:00" />
                    <Picker.Item label="7:00 AM" value="7:00" />
                    <Picker.Item label="8:00 AM" value="8:00" />
                    <Picker.Item label="9:00 AM" value="9:00" />
                    <Picker.Item label="10:00 AM" value="10:00" />
                    <Picker.Item label="11:00 AM" value="11:00" />
                    <Picker.Item label="12:00 PM" value="12:00" />
                    <Picker.Item label="1:00 PM" value="13:00" />
                    <Picker.Item label="2:00 PM" value="14:00" />
                    <Picker.Item label="3:00 PM" value="15:00" />
                    <Picker.Item label="4:00 PM" value="16:00" />
                    <Picker.Item label="5:00 PM" value="17:00" />
                    <Picker.Item label="6:00 PM" value="18:00" />
                    <Picker.Item label="7:00 PM" value="19:00" />
                    <Picker.Item label="8:00 PM" value="20:00" />
                    <Picker.Item label="9:00 PM" value="21:00" />
                    <Picker.Item label="10:00 PM" value="22:00" />
                    <Picker.Item label="11:00 PM" value="23:00" />
                  </Picker>
                </View>
                <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                  <Text style={styles.closeButtonText}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
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
    resizeMode: 'cover',
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
    top: 40,
    marginTop: 20,
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
    color: 'white',
  },
  meterContainer: {
    height: 300,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
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
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  goalText: {
    fontSize: 16,
    marginTop: 10,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  touchableWaterBottle: {
    width: 40,
    height: 100,
    marginTop: 20,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  messageText: {
    fontSize: 18,
    color: 'green',
    marginTop: 10,
    alignSelf: 'center',
  },
  historyContainer: {
    maxHeight: 200,
    width: 230,
    marginTop: 20,
    borderWidth: 1,
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 10,
    alignSelf: 'center',
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
    alignSelf: 'center',
  },
  button: {
    flex: 1,
    backgroundColor: '#8BADD3',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center', // Center the content horizontally
    justifyContent: 'center', // Center the content vertically
    margin: 5,
  },

  welcomeText: {
    color: 'white',
    fontSize: 30,
  },

  modalText2: {
    color: 'white',
    fontSize: 18,
    alignItems: 'left',
    justifyContent: 'center',
  },

  buttonText: {
    color: '#333',
    fontSize: 18,
  },
  modalContainer1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'left',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalText: {
    fontSize: 24,
    color: 'white',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#8BADD3',
    padding: 10,
    borderRadius: 5,
    margin: 10,
    alignItems: 'center',
    borderRadius: 5,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#333',
    fontSize: 20,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    fontSize: 50,
  },
  modalText3: {
    fontSize: 20,
    color: 'black',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  modalContent: {
    backgroundColor: '#8BADD3',
    padding: 60,
    borderRadius: 10,
    alignItems: 'center',
    fontSize: 50,
  },
  pickerContainer: {
    marginTop: 20,
    borderColor: '#ccc',
    borderRadius: 5,
    borderWidth: 1,
    paddingHorizontal: 10,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: 'white', // Set a background color to make options visible
  },

  picker: {
    height: 40,
    width: '100%',
    fontSize: 16,
    alignSelf: 'center',
    alignItems: 'center',
  },

  closeButton: {
    marginTop: 20,
  },
  closeButtonText: {
    color: 'red',
    fontSize: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '80%',
  },
  backButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },

  backButtonText: {
    color: 'white',
    fontSize: 16,
  },
});
