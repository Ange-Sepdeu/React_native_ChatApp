import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, Text, Badge, TouchableOpacity, View, TouchableOpacityComponent } from 'react-native';

function Group() {
  return (
    <>
        <TouchableOpacity>
        <Text style={styles.create}>Create A New Group</Text>
        <MaterialCommunityIcons style={styles.addgroup} name='account-multiple-plus-outline' size={30}/>
        </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
    create: {
        top: 15,
        left: 10,
        fontSize: 16,
        color: '#928F8F'
    },
    addgroup: {
        left: 300,
        bottom: 10,
        color: '#928F8F'
    }
})

export default Group