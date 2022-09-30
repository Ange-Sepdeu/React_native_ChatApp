import React from 'react'
import { Image, View, Text, StyleSheet } from 'react-native'

function SplashScreen() {
  return (
    <>
     <View style={styles.container}>
        <Image resizeMode='contain' style={styles.splashImg} source={require('../assets/logoApp.png')} />
     </View>
    </>
  )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2790F1',
        width: '100%',
        height: '100%'
    },
    splashImg: {
        margin: 0,
        position: 'absolute',
        width: 134.65,
        height: 138.17,
        left: 112,
        top: 200,
     }

  })

export default SplashScreen