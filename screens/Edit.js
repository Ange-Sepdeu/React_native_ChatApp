import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, Text, KeyboardAvoidingView, Image, TextInput,TouchableOpacity, View } from 'react-native';

function Edit() {
  return (
    <>
        <KeyboardAvoidingView 
    behavior='height'
    style={styles.container}>
        <Image resizeMode='contain' style={styles.logo} source={require('../assets/logoApp.png')}/>
        <TextInput placeholder='Username' placeholderTextColor='#2790F1' style={styles.inputs}/>
        <TextInput  placeholder='Email Address' placeholderTextColor='#2790F1' style={styles.input2}/>
        <TouchableOpacity style={styles.button}>
            <Text style={{fontSize: 20, color:'#FFFFFF', textAlign: 'center', lineHeight:25, top:5, fontWeight:'600'}} >
                Update</Text>
        </TouchableOpacity>
    </KeyboardAvoidingView>
    </>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2790F1'
    },
    logo: {
        width: 104,
        height: 105.66,
        position: 'relative',
        top: '20%',
        left: 130
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
       width: 250,
       height: 50,
       position: 'relative',
       left: 60,
       top: '35%',
       borderWidth: 5,
       borderColor: '#FFFFFF',
       borderRadius: 35 
    }
})

export default Edit