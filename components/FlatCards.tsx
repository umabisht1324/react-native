import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card , styles.cardOne]}>
        <Text>Cyan</Text>
        </View>

        <View style={[styles.card , styles.cardTwo]}>
        <Text>Yellow</Text>
        </View>

        <View style={[styles.card , styles.cardThree]}>
        <Text>Green</Text>
        </View>

        {/* <View style={[styles.card , styles.cardTwo]}>
        <Text>Yellow</Text>
        </View> */}

        {/* <View style={[styles.card , styles.cardOne]}>
        <Text>Cyan</Text>
        </View>

        <View style={[styles.card , styles.cardThree]}>
        <Text>Green</Text>
        </View>

        <View style={[styles.card , styles.cardTwo]}>
        <Text>Yellow</Text>
        </View>

        <View style={[styles.card , styles.cardOne]}>
        <Text>Cyan</Text>
        </View> */}

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:128,
        paddingTop:15
    },

    container:{
        flex:1,
        flexDirection:'row',
        // flexDirection:'column',
        padding:8,
        flexWrap: 'wrap',
        flexShrink:1
    },

    card:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:100,
        height:100,
        borderRadius:14,
        margin:8,
    },
    cardOne:{
        backgroundColor:'#00ffea'
    },

    cardTwo:{
        backgroundColor:'#ffd500'
    },

    cardThree:{
        backgroundColor:'#00ff7f'
    }

})

// rnfs