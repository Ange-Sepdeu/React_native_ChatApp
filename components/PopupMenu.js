import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from 'react-native-popup-menu';

const PopupMenu = ({route}) => {
    
    const [contact, setContact] = useState([]);
    useEffect(()=>{
        getContact(route.params.name);
    }, [])
    
    const getContact = async() => {

    }
  return (
    <View>
        <Menu>
            <MenuTrigger>
            <TouchableOpacity style={styles.menuButton}>
            <MaterialCommunityIcons style={styles.profile} name="account-edit-outline" color='black' size={40} />
                        <Text style={styles.text}>New</Text>
                    </TouchableOpacity>
            </MenuTrigger>
            <MenuOptions>

            </MenuOptions>
        </Menu>
    </View>
  )
}

export default PopupMenu