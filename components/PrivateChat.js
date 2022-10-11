import React, { useEffect, useState } from 'react'
import {Text, TextInput, StatusBar, TouchableOpacity, View, StyleSheet, FlatList} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import MessageContainer from './MessageContainer';
import io from 'socket.io-client'


function PrivateChat({navigation}) {
    const socket = io('http://192.168.43.97:8000');
    const [message, setMessage] = useState('');
    const [chat, setChat] = useState([]);
    var incoming, out;
    useEffect(() => {
        socket.on('chat-message', message => {
        setChat([...chat, {message}]);
        incoming=true
        out = false
    })
    }, [chat]);
    const handleSubmit = (text) => {
        if(text !== ""){
            incoming=false;
            out = true;
            socket.emit("send-message", text,"Audrey Ruphine");
            setMessage("")
        }
    }
  return (
    <>
        <View style={styles.top}>
            <TouchableOpacity>
            <MaterialCommunityIcons name='arrow-left' size={30} />        
        </TouchableOpacity>
        <Text style={styles.toptext}>Audrey Ruphine</Text>
        <Text style={styles.bottomtoptext}>Last Seen today 8:00</Text>    
            <TouchableOpacity>
            <MaterialCommunityIcons style={{left:300, top: -40}} name='video' size={30} />
            </TouchableOpacity>          
            <TouchableOpacity>
            <MaterialCommunityIcons style={{left:250, top: -70}} name='phone' size={30} />
            </TouchableOpacity>
        </View>
            <View>
                {/* <FlatList
                  data={chat}
                  renderItem={() => <MessageContainer  message={message} incoming={incoming} out={out} />}
                  keyExtractor={(index)=>index.toString()}
                /> */}
            </View>
            <View style={styles.input}>
                <TextInput value={message} onChangeText={(text)=> setMessage(text)} placeholderTextColor='#928F8F' placeholder='Enter your message...' />
            </View>
                <TouchableOpacity onPress={()=>handleSubmit(message)}>
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