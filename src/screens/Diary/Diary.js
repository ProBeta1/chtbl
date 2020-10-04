import React, { useEffect, useState } from 'react'
import { FlatList, Keyboard, Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from './styles';
import { firebase } from '../../firebase/config'

const Diary = () => {
    return (
        <View>
            <View style={styles.container}>
                <Text style={{
                    fontFamily: 'Montserrat',
                    fontStyle: 'normal',
                    fontWeight: '600',
                    fontSize: '18px',
                    lineWeight: '22px'
                }}>
                    Diary
            </Text>
                <Text style={{ paddingTop: '180px' }}>You have no diaries</Text>
            </View>
        </View>
    )
}

export default Diary;