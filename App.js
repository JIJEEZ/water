import { View, Text } from "react-native";
import React from "react";

import SplashScreen from "./screens/SplashScreen";
import AccountScreen from "./screens/AccountScreen";
import DashboardScreen from "./screens/DashboardScreen";
import HistoryScreen from "./screens/HistoryScreen";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GoalScreen from "./screens/GoalScreen";
import CustomScreen from "./screens/CustomScreen";
import PersonalScreen from "./screens/PersonalScreen";
import PersonalWeightScreen from "./screens/PersonalWeightScreen";
import PersonalAgeScreen from "./screens/PersonalAgeScreen";
import PersonalDailyScreen from "./screens/PersonalDailyScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs({ route }) {
  return (
    <Tab.Navigator initialRouteName="Dashboard" screenOptions={{ activeTintColor: '#8BADD3' }}>
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        initialParams={{
          username: route.params.username,
          selectedBottleSize: route.params.selectedBottleSize,
          // Add other initial parameters here
        }}
        options={{
          tabBarLabel: 'Dashboard',
          headerShown: false, // Hide the header bar
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        initialParams={{ username: route.params.username, }}
        options={{
          tabBarLabel: 'History',
          headerShown: false, // Hide the header bar
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="chart-bell-curve" color={color} size={size} />
          ),
        }}
      />

    </Tab.Navigator>
  )
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        {/* Scren Stacks */}
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Account" component={AccountScreen} />
        <Stack.Screen name="Goal" component={GoalScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="Custom" component={CustomScreen} />
        <Stack.Screen name="Personal" component={PersonalScreen} />
        <Stack.Screen name="Weight" component={PersonalWeightScreen} />
        <Stack.Screen name="Age" component={PersonalAgeScreen} />
        <Stack.Screen name="DailyGoal" component={PersonalDailyScreen} />
        {/* Buttom Tabs */}
        <Stack.Screen name="Tabs" component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
