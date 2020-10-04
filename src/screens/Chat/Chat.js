import React, { useState, useCallback, useEffect } from 'react'
import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat'
import { firebase } from '../../firebase/config'


export function Chat() {
  const [messages, setMessages] = useState([]);

  useEffect(async () => {
    try {
      firebase.database().ref("chats").on("value", (snapshot) => {
        let chat = [];
        snapshot.forEach((snap) => {
          let ob = {
            _id: snap.val().user._id,
            text: snap.val().msg[0].text,
            user: snap.val().user,
            createdAt: snap.val().user.time
          }
          chat.push(ob);
        })
        console.log(chat)
        chat.reverse();
        setMessages(chat);
      });
    }
    catch (e) {
      console.log(e)
    }
  }, [])

  const pushIt = async (msg) => {
    try {
      await firebase.database().ref("chats").push({
        msg,
        user: {
          _id: firebase.auth().currentUser.uid,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
          time: new Date()
        },
      });
    } catch (e) {
      console.log(e);
    }
  }

  const onSend = useCallback((messages = []) => {
    let tmp = messages;
    // setMessages(previousMessages => GiftedChat.append(messages))
    pushIt(tmp);
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Group 3</Text>
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: firebase.auth().currentUser.uid,
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginBottom: 5,
    padding: 20,
    backgroundColor: 'white'
  },
  txt: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold'
  }
})