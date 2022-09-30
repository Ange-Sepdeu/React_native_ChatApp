import React, { useState } from 'react'
import { StyleSheet, Text, Image, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native'
import Container,{Toast} from 'toastify-react-native'
import axios from 'axios'

function ActivateAccount({route, navigation}) {
    const email = route.params.param1;
    const name = route.params.param2;
    const password = route.params.param3;
    const [code, setCode] = useState('');
    const handleSubmit = async() => {
        if(!code) {
            Toast.error("Code required !!!");
        }
        else {
            axios.post(`http://192.168.43.97:7000/activate/${email}/${name}/${password}`, {code: code})
            .then(res => {
                if(res.status===200) {
                    navigation.navigate('ChatScreen', {
                        name: name,
                        email: email
                    })
                }
                else Toast.error(res.data);
                })
                .catch(error => console.log(error));
    }
    }
    return (
    <>
    <KeyboardAvoidingView style={styles.container} behavior='height'>
        <Container  position='top' />
        <Image style={styles.logo} source={require('../assets/logoApp.png')}/>
        <Text numberOfLines={2} style={{fontSize:17, color: "#FFFFFF", lineHeight:21, textAlign:'center', top:'25%'}}>
        We sent an activation code to {email}. Enter it below
        </Text>
        <TextInput placeholder='Activation Code' onChangeText={(text) => setCode(text)} placeholderTextColor='#2790F1' style={styles.inputs}/>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={{fontSize: 20, textAlign: 'center', top:7, lineHeight:24, fontWeight:'600', color: '#FFFFFF'}} >
                Activate</Text>
        </TouchableOpacity>
    </KeyboardAvoidingView>
    </>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#2790F1"
    },
    logo: {
        position: 'relative',
        width: 104,
        height: 105.66,
        left: 130,
        top: '20%',
        resizeMode: 'contain',
    },
    inputs: {
        position: 'relative',
        width: 322,
        height: 68,
        left: 19,
        top: '30%',
        textAlign: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 35
    },
    button: {
        position: 'relative',
        width: 250,
        height: 50,
        left: 60,
        top: '35%',
        borderWidth: 4,
        borderColor: '#FFFFFF',
        borderRadius: 35
    }
})

export default ActivateAccount