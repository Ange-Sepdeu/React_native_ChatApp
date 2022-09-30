import React, { useEffect, useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, Text, Badge, TouchableOpacity, View, FlatList } from 'react-native';
import {
  MenuProvider

} from 'react-native-popup-menu'

function Message({route,navigation}) {
  const [user, setUser] = useState([]);
  const handleSubmit = () => {
    navigation.navigate('Edit',{})
  }
  // useEffect(()=> {

  // })
  return (
    <>
      {}
            <View>
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