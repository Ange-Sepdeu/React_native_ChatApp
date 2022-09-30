import React from 'react'
import { Pressable, StyleSheet, Text, View, Alert } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Badge } from "@rneui/themed";


const ViewMessage = ({props}) => {
  return (
    <>
    <Pressable>
    <View style={{padding: 15, marginBottom: 1,  borderBottomWidth: 1,
        borderBottomColor: '#E1E2E3', height: 100}}>
    <MaterialCommunityIcons style={styles.icon} name='account-circle' size={60} />
    <View style={styles.messageContainer}>
        {/* <Text>{props.name}</Text> */}
        <Text style={styles.name}>Ange Sepdeu</Text>
        <Text style={styles.message}>Hey guy!</Text>
    </View>
        <MaterialCommunityIcons style={{left:60, top: -105}} name='check' size={20} />
    </View>
        {/* <Text style={styles.time}>{new Date().getHours()}:{new Date().getMinutes()}</Text> */}
        {/* <Badge value="3" status="success" 
        badgeStyle={{backgroundColor: '#2790F1', fontWeight: 'bold',left: 135,
    top: -65 }} /> */}
    </Pressable>
    </>
  )
}

const styles = StyleSheet.create({
    icon : {
        top: 10
    },
    time: {
    color: '#2790F1',
    fontWeight: 'bold',
    left: 300,
    top: -65
},
    messageContainer: {
        padding: 20,
    },
    message: {
        left: 60,
        top: -65
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        left: 50,
        top: -65
    }
})

export default ViewMessage