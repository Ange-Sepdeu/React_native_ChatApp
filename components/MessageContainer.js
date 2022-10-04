import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const MessageContainer = ({incoming, out, message}) => {
    return (
        <>
            <View style={{display:'flex', flex:1}}>
            { incoming && (
            <View style={styles.container}>
                <Text style={styles.text}>{message}</Text>
            </View>
            )
            }
            {
                out && (
                    <View style={styles.outgoing}>
                        <Text style={styles.text}>{message}</Text>
                    </View>
                )
            }
            </View>
        </>
  )
}

export default MessageContainer

const styles = StyleSheet.create({
    container: {
        backgroundColor: "gray",
        borderBottomLeftRadius:15,
        borderBottomRightRadius: 15,
        borderTopRightRadius: 15,
        padding: 10,
        alignSelf: 'flex-start'
    },
    outgoing: {
        backgroundColor: "#2790F1",
        borderBottomLeftRadius:15,
        borderBottomRightRadius: 15,
        borderTopLeftRadius: 15,
        padding: 10,
        alignSelf: 'flex-end'
    },
    text: {
        color: '#FFFFFF',
        fontWeight: '700'
    }
})