import React, { useEffect, useState } from 'react'
import { FlatList, Keyboard, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { firebase } from '../../firebase/config'
import styles from './styles';


const Groups = () => {
    return (
        <View style={styles.container}>
            <Text style={{
                fontFamily: 'Montserrat',
                fontStyle: 'normal',
                fontWeight: '600',
                fontSize: '14px',
                lineHeight: '17px'
            }}>The focus this week is </Text>

            <View sty>
                <Text>Hiring bias</Text>
            </View>

            <Text>Watch the introductory video</Text>

        </View>
    )
}

export default Groups;