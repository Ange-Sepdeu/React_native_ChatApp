import React, {useState} from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView, Alert } from 'react-native'
import Container,{Toast} from 'toastify-react-native'
import axios from 'axios'

function Login({navigation}) {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const pattern = /^([a-zA-Z]{2,40})+$/;
    const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

    const handleSubmit = async() => {
        if(pass==='' || email==='') {
         return Toast.error("Fill the inputs!!!")   
        }
        else {   
            if(!expression.test(email)){
                Toast.error("Enter a valid email address!!");
                setEmail('');
                return;
            }
            axios.post(`http://192.168.43.97:7000/login`, {email:email, password: pass})
            .then(res => {
                if(res.status===200) {
                    // Alert.alert("Remember Me","Remember me ?",[
                    //     {
                    //         text: "Yes"
                    //     }, 
                    //     {
                    //         text: "No"
                    //     }
                    // ])
                    navigation.navigate('ChatScreen', {
                        email: email,
                        name: res.data,
                        pass: pass
                    })
                }
                else 
                {
                Toast.error(res.data);
            }
                })
                .catch(error => console.log(error));
    }

    }
    const EmailIcon = "https://img.icons8.com/material-rounded/100/000000/new-post.png"
  return (
    <>
    <KeyboardAvoidingView 
    behavior='height'
    style={styles.container}>
            <Container position='top' />
        <Image resizeMode='contain' style={styles.logo} source={require('../assets/logoApp.png')}/>
        <TextInput value={email} onChangeText={(text)=> setEmail(text)}  placeholder='Email Address' placeholderTextColor='#2790F1' style={styles.input2}/>
        <TextInput value={pass} onChangeText={(text)=> setPass(text)} secureTextEntry={true}  placeholder='Password' placeholderTextColor='#2790F1' style={styles.input3}/>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={{fontSize: 20, color:'#FFFFFF', textAlign: 'center', lineHeight:25, top:5, fontWeight:'600'}} >
                Send</Text>
        </TouchableOpacity>
        <Text style={{color: 'white', top: 220, left: 150, fontSize:17}} onPress={()=>navigation.navigate('Register')}>Register</Text>
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
        height: 50,
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
        height: 50,
        top: '28%',
        left: 19,
        backgroundColor: '#FFFFFF',
        borderRadius: 35
    },
    input3: {
        textAlign: 'center',
        position: 'relative',
        width: 322,
        height: 50,
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

export default Login