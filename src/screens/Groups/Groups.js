import React, { useEffect, useState } from 'react'
import { FlatList, Keyboard, Text, TextInput, TouchableOpacity, View, Button } from 'react-native'
import { firebase } from '../../firebase/config'
import styles from './styles';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Groups = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={{
                fontFamily: 'Montserrat',
                fontStyle: 'normal',
                fontWeight: '600',
                fontSize: '14px',
                lineHeight: '17px'
            }}>The focus this week is </Text>

            <View>
                <Text>Hiring bias</Text>
            </View>

            <Text>Watch the introductory video</Text>

            <Button
                onPress={() => navigation.navigate("Chat")}
                title="Join Group Chat"
            />
        </View>
    )
}

export default Groups;