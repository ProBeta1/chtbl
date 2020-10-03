import React, { useEffect, useState } from 'react'
import { Image } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'


const Item = (props) => {
    return (
        <View style={styles.item}>
            <Image source={props.img} style={styles.image} />
            <View style={styles.textBlock}>
                <Text style={styles.title}>
                    {props.title}
                </Text>
                <Text style={styles.content}>
                    {props.content}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        flexDirection: 'row',
    },
    image: {
        width: 50,
        height: 50,
        resizeMode: 'cover',
        margin: 18
    },
    textBlock: {
        flexDirection: 'column',
        margin: 18
    },
    title: {
        fontSize: 19,
        fontWeight: '800'
    },
    content: {
        fontSize: 16,
        color: '#8E8E8E'
    }
})

export default Item;