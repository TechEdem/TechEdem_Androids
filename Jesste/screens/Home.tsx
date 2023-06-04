import React from 'react'
import { View, Text, Image, ScrollView, StyleSheet} from 'react-native'


export default function Home() {
  return (
    <View>
        <Image source={require('../assets/MobileIntro.png')} style = {styles.intro}/>
        <View style = {styles.description}>
        <Image source={require('../assets/loader.png')} style ={styles.logo}/>
            <ScrollView style = {styles.services}>
                
            </ScrollView>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    intro: {
      width: '100%',
    },
    description: {
      position: 'absolute',
      width: '100%',
      backgroundColor: '#rgba(7, 7, 7, 0.1)',
      height: '100%',
    },
    logo: {
        width: 70,
        height: 70,
        borderRadius: 50,
        margin: 10,
    },
    services: {
        backgroundColor: '# rgba(180, 179, 179, 0.88);',
        marginTop: 10,
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
    }
  })