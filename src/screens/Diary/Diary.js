import React, { useEffect, useState } from 'react'
import { FlatList, Keyboard, Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from './styles';
import { firebase } from '../../firebase/config'

const Diary = () => {
    const [diaryEntries, setDiaryEntries] = useState([])
    const [displayAddDiary, setDisplayAddDiary] = useState(false)
    const [date, setDate] = useState("")
    const [theme, setTheme] = useState("")
    const [description, setDescription] = useState("")

    const onDiaryEntrySubmit = () => {

    }

    const DATA = [
        {
            date: "1-1-1",
            theme: "cows",
            description: "moo"
        }
    ]

    return (
        <View>
            <View style={styles.container}>
                <View style={styles.row}>
                    <Text style={{
                        fontFamily: 'Montserrat',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        fontSize: '18px',
                        lineWeight: '22px'
                    }}>
                        Diary
                </Text>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => setDisplayAddDiary(!displayAddDiary)}>
                        <Text style={styles.buttonTitle}>+</Text>
                    </TouchableOpacity>
                </View>


                {displayAddDiary ? <View>
                    <TextInput
                        style={styles.input}
                        placeholderTextColor="#aaaaaa"
                        placeholder='Date'
                        onChangeText={(x) => setDate(x)}
                        value={date}
                        underlineColorAndroid="transparent"
                        autoCapitalize="none"
                    />
                    <TextInput
                        style={styles.input}
                        placeholderTextColor="#aaaaaa"
                        secureTextEntry
                        placeholder='theme'
                        onChangeText={(x) => setTheme(x)}
                        value={theme}
                        underlineColorAndroid="transparent"
                        autoCapitalize="none"
                    />
                    <TextInput
                        style={styles.input}
                        placeholderTextColor="#aaaaaa"
                        secureTextEntry
                        placeholder='Description'
                        onChangeText={(x) => setDescription(x)}
                        value={description}
                        underlineColorAndroid="transparent"
                        autoCapitalize="none"
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={onDiaryEntrySubmit}>
                        <Text style={styles.buttonTitle}>Add</Text>
                    </TouchableOpacity>
                </View> : null}



                <Text style={{ paddingTop: '180px' }}>You have no diaries</Text>
            </View>
        </View>
    )
}

export default Diary;