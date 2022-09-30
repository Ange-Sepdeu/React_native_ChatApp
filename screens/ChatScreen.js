import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, Text, Badge, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Status from '../components/Status';
import Message from '../components/Message';
import Group from '../components/Group';

function Calls() {
    <View>
        <Text>Settings Screen</Text>
    </View>
}
function Profile() {
    <View>
        <Text>Status Screen</Text>
    </View>
}

function Settings() {
    <View>
        <Text>Status Screen</Text>
    </View>
}

const Tab = createMaterialTopTabNavigator();

function ChatScreen({route, navigation}) {
    const name = route.params.name;
    const handleSubmit = () => {
        navigation.navigate('AddPerson',{
            email: route.params.email
        })
    }
    return (
    <>
    <View style={styles.topBar}>
        <Text style={styles.topBarText}>{name}</Text>
        <TouchableOpacity onPress={handleSubmit}>
        <MaterialCommunityIcons name="account-plus-outline" style={styles.add} color='black' size={30} />
        </TouchableOpacity>
        <MaterialCommunityIcons name="account-search-outline" style={styles.search} color='black' size={30} />
    </View>
    <Tab.Navigator
    initialRouteName="Chats"
    screenOptions={{
      tabBarActiveTintColor: 'gray',
    }}
    >
      <Tab.Screen name="Chats" component={Message}
        options={{
            tabBarBadge: ()=>{
            return <Text style={{ backgroundColor: '#2790F1', 
             paddingTop: 2,
             paddingBottom: 2,
             paddingLeft: 6,
             paddingRight: 6,
             borderRadius: 100, 
             fontSize: 12, 
             fontWeight: '700',
             color: '#FFFFFF', 
             right:3, 
             top:13}}>3</Text>},
        }}
      />
      <Tab.Screen name="Group" component={Group}
        options={{
            tabBarBadge: ()=>{
            return <Text style={{ backgroundColor: '#2790F1', 
             paddingTop: 5,
             paddingBottom: 5,
             paddingLeft: 6,
             paddingRight: 6,
             borderRadius: 100, 
             fontSize: 10, 
             fontWeight: '700',
             color: '#FFFFFF', 
             top:13}}>15</Text>},
        }}
      />
      <Tab.Screen name="Status" component={Status}
        options={
            {
                tabBarBadge: () =>{
                    return <Text
                    style={{
                        color: '#2790F1',
                        fontSize: 20,
                        fontWeight: '700',
                        top: 12,
                        right: 10
                    }}
                    >*</Text>
                }
            }
        }
      />
      <Tab.Screen name="Calls" component={Calls} />
    </Tab.Navigator>
            <StatusBar backgroundColor='#2790F1'/>
    </>
  );
}

const styles = StyleSheet.create({
    add: {
            top: 10,
            left: '85%',
            bottom: '5%'
    },
    search: {
        left: '65%',
        bottom: '18%'
},
    topBarText: {
        fontSize: 25,
        top: 25,
        marginTop: 30,
        marginBottom: -20,
        color: '#2790F1',
        fontWeight: '700',
        left: 20
    },
})

export default ChatScreen