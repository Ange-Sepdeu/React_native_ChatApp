import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

function Status() {
  return (
    <>
    <TouchableOpacity>
        <Text style={styles.addimage}>Add Image</Text>
    <MaterialCommunityIcons style={styles.camera} name='camera-plus-outline' size={30} />
    </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
    camera: {
        textAlign: 'center',
        left: 40,
        top: 0,
        color: '#928F8F',
    },
    addimage: {
        top: 25,
        textAlign: 'center',
        right: 15,
        fontSize: 16,
        color: '#928F8F'
    },
})

export default Status