import React, {useEffect, useState} from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView, Alert, ScrollView } from 'react-native'
import Container,{Toast} from 'toastify-react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import axios from 'axios';

function AddPerson({route, navigation}) {
    const email = route.params.email;
    const handleSubmit = () => {}
    const handleDelete = (email) => {
        
    }
    const [friend, setFriend] = useState([]);
    useEffect(()=>{
        getFriends()
    },[]);
    
    const getFriends = () => {
        axios.get(`http://192.168.43.97:7000/getFriends/${email}`)
            .then(res => {
                if(res.status===200) {
                    setFriend(res.data);
                }
                else 
                {
                 console.log(res.data);
            }
                })
                .catch(error => console.log(error));
    }
  return (
    <>
        <KeyboardAvoidingView 
    behavior='height'
    style={styles.container}>
        <Image resizeMode='contain' style={styles.logo} source={require('../assets/logoAppBlue.png')}/>
        <Text style={{textAlign: 'center', fontSize:20, marginTop: 50}}>Submit Friend Requests</Text>
        <ScrollView>
        {friend && friend.map((fr,index)=>{
        return(
        <>
            <View style={{padding: 10, height: 150}}>
            <MaterialCommunityIcons style={styles.icon} name='account-circle' size={80} />
         <Text style={styles.name}>{fr.username}</Text>
         <Text style={styles.email}>{fr.email}</Text>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={{fontSize: 20, color:'#2790F1', textAlign: 'center', lineHeight:25, top:7, fontWeight:'600'}} >
            Add</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.delete} onPress={handleDelete(fr.email)}>
        <Text style={{fontSize: 20, color:'#2790F1', textAlign: 'center', lineHeight:25, top:7, fontWeight:'600'}} >
            Delete</Text>
    </TouchableOpacity>
    </View>    
    </>
    )
        })}
        <Text style={{fontSize:20, textAlign: 'center'}}>Accept Requests</Text>
        </ScrollView>
    </KeyboardAvoidingView>
    </>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#2790F1'
    },
    logo: {
        width: 104,
        height: 105.66,
        position: 'relative',
        top: '5%',
        left: 130
    },
    name: {
        left: 85,
        top: -50,
        fontSize: 20
    },
    email: {
        fontSize: 15,
        left: 85,
        top: -50
    },
    inputs: {
        width: 322,
        height: 68,
        position: 'relative',
        left: 19,
        textAlign: 'center',
        top: '25%',
        backgroundColor: '#FFFFFF',
        borderRadius: 35
    },
    input2: {
        textAlign: 'center',
        position: 'relative',
        width: 322,
        height: 68,
        top: '30%',
        left: 19,
        backgroundColor: '#FFFFFF',
        borderRadius: 35
    },
    button: {
       width: 100,
       height: 40,
       position: 'relative',
       left: 60,
       top: -40,
       borderWidth: 2,
       borderColor: '#2790F1',
       borderRadius: 35 
    },
    delete: {
        width: 100,
        height: 40,
        position: 'relative',
        left: 180,
        top: -80,
        borderWidth: 2,
        borderColor: '#2790F1',
        borderRadius: 35
    },
    icon: {
        top: 15,
    }
})

export default AddPerson