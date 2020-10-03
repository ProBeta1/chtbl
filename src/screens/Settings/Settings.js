import React, { useEffect, useState } from 'react'
import { FlatList, Keyboard, Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from './styles';
import { firebase } from '../../firebase/config'
import Item from '../../components/Item';
import user from '../../pics/user.png';

const Settings = () => {

    const DATA = [
        {
            img: user,
            title: 'My account',
            content: 'Acount details and profile'
        },
        {
            img: user,
            title: 'Security',
            content: 'Security options & controls'
        },
        {
            img: user,
            title: 'Privacy',
            content: 'Information collected & usage'
        },
        {
            img: user,
            title: 'Communication',
            content: 'Emails, invites and notifications'
        },
        {
            img: user,
            title: 'Help & Support',
            content: 'FAQ & help desk'
        }, {
            img: user,
            title: 'Log out',
            content: 'Log out of your account'
        },

    ]


    const renderItem = ({ item }) => (
        <Item img={item.img} title={item.title} content={item.content} />
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Settings</Text>

            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.title}
            />



        </View>
    )
}

export default Settings;