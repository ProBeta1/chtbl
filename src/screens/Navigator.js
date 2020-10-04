import * as React from 'react';
import { Group, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomeScreen from './HomeScreen/HomeScreen';
import Groups from './Groups/Groups';
import Notification from './Notification/Notification';
import Diary from './Diary/Diary';
import Settings from './Settings/Settings';
import Onboarding from './Onboarding/Onboarding';

const Tab = createBottomTabNavigator();

const YoTabs = () => {
    return (
        <Tab.Navigator
            initialRouteName="HomeScreen"
            tabBarOptions={{
                activeTintColor: '#00ABE3',
                inactiveTintColor: '#000000',
                activeBackgroundColor: '#F2FAFD',
                inactiveBackgroundColor: '#F2FAFD'
            }}
        >
            <Tab.Screen
                name="Onboarding"
                component={Onboarding}
                options={{
                    tabBarLabel: 'Onboarding',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }}
            />

            <Tab.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Groups"
                component={Groups}
                options={{
                    tabBarLabel: 'Groups',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account-group" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Notification"
                component={Notification}
                options={{
                    tabBarLabel: 'Notification',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="bell" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Diary"
                component={Diary}
                options={{
                    tabBarLabel: 'Diary',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="book" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Settings"
                component={Settings}
                options={{
                    tabBarLabel: 'Settings',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="settings" color={color} size={size} />
                    ),
                }}
            />

        </Tab.Navigator>
    )
}

export default YoTabs;