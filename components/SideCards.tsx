import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function SideCards() {
  return (
    <View>
        <Text style={styles.headingText}>Side Cards</Text>
        <ScrollView horizontal={true} style={styles.container}>

        <View style={[styles.card,styles.sideCard]}> 
        <Text>Tap 1</Text>
        </View>

        <View style={[styles.card,styles.sideCard]}>
        <Text>Tap 2</Text>
        </View>

        <View style={[styles.card,styles.sideCard]}>
        <Text>Tap 3</Text>
        </View>

        <View style={[styles.card,styles.sideCard]}>
        <Text>Tap 4</Text>
        </View>

        <View style={[styles.card,styles.sideCard]}>
        <Text>Tap 5</Text>
        </View>

        <View style={[styles.card,styles.sideCard]}>
        <Text>Tap 6</Text>
        </View>

        <View style={[styles.card,styles.sideCard]}>
        <Text>Tap 7</Text>
        </View>


        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:128,
        paddingTop:150
    },

    container:{
        
        padding:8,
        
    },

    card:{
        flex:1,
        alignItems:'center',
        width:100,
        height:100,
        padding:15,
        margin:5,
        justifyContent:'center'//text inside card in center
    },
    sideCard:{
        backgroundColor:'#CAD5E2',
        borderRadius:100,
        elevation:4,
        shadowOffset:{
            width:1,
            height:1
        },
        shadowColor:'#333',
        shadowOpacity:0.2,
        shadowRadius:2

    }
})