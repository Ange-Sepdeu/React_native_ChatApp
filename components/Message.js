import React, { useEffect, useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, Text, Badge, TouchableOpacity, View, FlatList } from 'react-native';
import ViewMessage from './ViewMessage';

function Message({navigation, route}) {
  const [user, setUser] = useState([]);
 const name=route.params.name;
  const handleSubmit = () => {
    navigation.navigate('AddContact',{
      name: name
    })
  }
  // useEffect(()=> {

  // })
  return (
    <>
      {}
            <View>
            {/* <ViewMessage name='Ange Sepdeu' lastMsg='Hey'/> */}
            <TouchableOpacity onPress={handleSubmit}> 
            <MaterialCommunityIcons style={styles.profile} name="message-plus-outline" color='black' size={40} />
            </TouchableOpacity>
            </View>
    </>
  )
}

const styles = StyleSheet.create({
    
    profile: {
        left: '85%',
        position: 'absolute',
        top: 380,
    },
    bottom: {
        height: 40,
        backgroundColor: ''
    }
})

export default Message