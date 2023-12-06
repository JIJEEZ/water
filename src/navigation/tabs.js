import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Dashboard from '../src/pages/dashboard' 
import History from '../src/pages/history' 
import Settings from '../src/pages/settings' 

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    height: 90,
                },
            }}
        >
            <Tab.Screen name="Dashboard" component={Dashboard} />
            <Tab.Screen name="History" component={History} />
            <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
    );
};

const style = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
            
    }
});


export default Tabs;