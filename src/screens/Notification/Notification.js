import React, { useEffect, useState } from 'react'
import { FlatList, Keyboard, Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from './styles';
import { firebase } from '../../firebase/config'

const Notification = () => {
    return (
        <View style={styles.container}>
            <Text style={{
                // fontFamily: 'Montserrat',
                fontStyle: 'normal',
                fontWeight: '600',
                fontSize: 18,
                lineWeight: 22
            }}>
                Notificaitons
            </Text>
            <Text style={{ paddingTop: 180 }}>You have no notifications</Text>
        </View>
    )
}

export default Notification;