import React, { useEffect, useState } from 'react'
import { FlatList, Keyboard, Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from './styles';
import { firebase } from '../../firebase/config'
import { Searchbar } from 'react-native-paper';
import Img1 from "../../pics/user.png"
import Img2 from "./images/img2.png"
import { Image } from 'react-native'
import user from '../../pics/user.png';
import { WebView } from 'react-native';
import YouTube from 'react-native-youtube';


export default function HomeScreen(props) {
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);

    return (
        <View style={styles.container}>
            <Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
            />
            <Text style={{
                // fontFamily: 'Montserrat',
                fontStyle: 'normal',
                fontWeight: '600',
                fontSize: 18,
                lineHeight: 22,
                margin: 30
            }}>
                Recommended videos
                Very confused why the image imports below aren't working
            </Text>

            {/* <WebView
                style={{
                    flex: 1,
                    width: '200px',
                    height: '200px'
                }}
                javaScriptEnabled={true}
                source={{ uri: 'https://www.youtube.com/watch?v=QCFb4BiDDcE&ab_channel=TEDxTalks' }}
            /> */}

            {/* ONLY WORKS ON MOBILE NOT WEB */}
            {/* <YouTube
                videoId="ZZ5LpwO-An4" // The YouTube video ID
                play // control playback of video with true/false
                fullscreen // control whether the video should play in fullscreen or inline
                loop // control whether the video should loop when ended
                // onReady={e => this.setState({ isReady: true })}
                // onChangeState={e => this.setState({ status: e.state })}
                // onChangeQuality={e => this.setState({ quality: e.quality })}
                // onError={e => this.setState({ error: e.error })}
                style={{ alignSelf: 'stretch', height: 300 }}
            /> */}

            <Image
                source={user}
            />
            <Image
                source={require('./images/img2.png')}
            />

        </View>
    )
}
