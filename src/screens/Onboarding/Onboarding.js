import React, { useEffect, useState } from 'react'
import { FlatList, Keyboard, Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from './styles';
import { firebase } from '../../firebase/config'
import Item from '../../components/Item';
import user from '../../pics/user.png';
import { Button } from 'react-native';

const Onboarding = () => {
    const [dateOfBirth, setDateOfBirth] = useState("")
    const [nationality, setNationality] = useState("")
    const [ethnicOrigin, setEthnicOrigin] = useState("")
    const [religion, setReligion] = useState("")

    const renderItem = ({ item }) => (
        <Item img={item.img} title={item.title} content={item.content} />
    );

    const onSubmitPress = () => {

    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Personal Details</Text>

            <Text style={styles.text}>Your personal information is hidden from other users</Text>

            <View style={styles.row}>
                {/* <View style={{ background: 'rgba(0, 171, 227, 0.5)', width: 30, height: 30, justifyContent: 'center', padding: 10 }}><Button style={{ color: 'none', border: 'none' }} title="M" /></View>
                <View style={{ background: 'rgba(0, 171, 227, 0.5)', width: 30, height: 30, justifyContent: 'center', padding: 10 }}><Text>F</Text></View>
                <View style={{ background: 'rgba(0, 171, 227, 0.5)', width: 123, height: 30, justifyContent: 'center', padding: 10 }}><Text>Non-binary</Text></View> */}
            </View>

            <TextInput
                style={styles.input}
                placeholderTextColor="#aaaaaa"
                secureTextEntry
                placeholder='Date of birth'
                onChangeText={(text) => setDateOfBirth(text)}
                value={dateOfBirth}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholderTextColor="#aaaaaa"
                secureTextEntry
                placeholder='Nationality'
                onChangeText={(text) => setNationality(text)}
                value={nationality}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholderTextColor="#aaaaaa"
                secureTextEntry
                placeholder='Ethnic Origin'
                onChangeText={(text) => setEthnicOrigin(text)}
                value={ethnicOrigin}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholderTextColor="#aaaaaa"
                secureTextEntry
                placeholder='Religion'
                onChangeText={(text) => setReligion(text)}
                value={religion}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => onSubmitPress()}>
                <Text style={styles.buttonTitle}>Log in</Text>
            </TouchableOpacity>
            {/* <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.title}
            /> */}



        </View>
    )
}

export default Onboarding;