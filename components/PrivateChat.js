import React from 'react'
import {Text, TextInput, StatusBar, TouchableOpacity, View, StyleSheet} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';


function PrivateChat() {
  return (
    <>
        <View style={styles.top}>
            <TouchableOpacity>
            <MaterialCommunityIcons name='arrow-left' size={30} />        
        </TouchableOpacity>
        <Text style={styles.toptext}>Ange Sepdeu</Text>
        <Text style={styles.bottomtoptext}>Last Seen today 8:00</Text>    
            <TouchableOpacity>
            <MaterialCommunityIcons style={{left:300, top: -40}} name='video' size={30} />
            </TouchableOpacity>          
            <TouchableOpacity>
            <MaterialCommunityIcons style={{left:250, top: -70}} name='phone' size={30} />
            </TouchableOpacity>
        </View>
            <View style={styles.input}>
                <TextInput placeholderTextColor='#928F8F' placeholder='Enter your message...' />
            </View>
                <TouchableOpacity>
                    <Text style={styles.submit}>Send</Text>
                </TouchableOpacity>
        <StatusBar backgroundColor='#2790F1'/>

    </>
  )
}

const styles = StyleSheet.create({
    top: {
        paddingTop: 30,
        paddingLeft: 15,
        height: 90,
        borderBottomWidth: 1,
        backgroundColor: '#E1E2E3',
        borderBottomColor: '#F3F5F6'
    },
    toptext: {
        marginTop: -40,
        fontSize: 25,
        left: 40,
        fontWeight: '600',
        // color:'#2790F1'
    },
    bottomtoptext: {
        left: 40,
        fontWeight: '600',
        // color:'#2790F1'
    },
    input: {
        padding: 15,
        position: 'absolute',
        marginTop: 500,
        left: 5,
        backgroundColor: '#E1E2E3',
        width: '75%',
        borderRadius: 25
    },
    submit: {
        padding: 10,
        backgroundColor: '#2790F1',
        width: 60,
        position: 'absolute',
        top: 420,
        left: '80%',
        color: 'white',
        borderRadius: 25,
    }
})

export default PrivateChat