import React, { useEffect, useState } from 'react'
import { FlatList, Keyboard, Text, TextInput, TouchableOpacity, View, Button } from 'react-native'

import styles from './styles';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import YouTube from 'react-native-youtube';
import YoutubePlayer from "react-native-yt-player";
import { Image } from 'react-native';


const Groups = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Group</Text>
            <Text style={styles.gtext}>The focus this week is </Text>

            <View style={styles.head}>
                <Text style={styles.wtext}> Hiring bias</Text>
            </View>

            <Text style={styles.intro}>Watch the introductory video</Text>


            <Image source={{ uri: "https://jsginc.com/wp-content/uploads/2019/08/bigstock-Smiling-Young-Man-Shaking-Hand-254970049.jpg" }} style={styles.img} />

            <Text>Unconscious bias in recruitment</Text>
            <Text style={styles.btext}>Humans are naturally motivated to categorize people and objects.</Text>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Chat")}
            >
                <Text style={styles.wtext}>Join Group Chat</Text>
            </TouchableOpacity>

        </View>
    )
}

console.disableYellowBox = true;

export default Groups;