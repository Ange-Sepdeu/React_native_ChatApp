import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'

const AddContact = ({navigation, route}) => {
    const [contact, setContact] = useState([]);
    const name = route.params.name;
    useEffect(()=>{
    axios.get(`http://192.168.43.97:7000/getContacts/${name}`)
    .then(res=>{
        if(res.status === 200){
            setContact(res.data);
        }
    })
    .catch(error => console.log(error))}, [contact]
    )
    return (
        <>
        <View style={{padding: 10, flex:1}}>
            <TouchableOpacity onPress={navigation.navigate("ChatScreen")}>
        <MaterialCommunityIcons name='arrow-left' size={25} style={{top: 35, left:5}} />        
        </TouchableOpacity>
            <Text style={{fontSize: 20, fontWeight: '700', left:50, marginTop: 10}}>CONTACTS</Text>
            {
                contact && contact.map((item) => {
                    <TouchableOpacity onPress={navigation.navigate("PrivateChat", 
                    {
                        name: item.name
                    }
                    )}>
                    <Text style={{borderBottomWidth:1, borderBottomColor: '#E1E2E3'}}>{item.name}</Text>
                    </TouchableOpacity>
                })
            }
        </View>
        </>
  )
}

export default AddContact