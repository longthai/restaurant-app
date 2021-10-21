
import React from 'react'; 
import {StyleSheet,Text,View, Image} from 'react-native';


export default function Discount() {
    return (
      <View style = {styles.body}>
          <Image style = {styles.image} source = {require('../assets/logo.png')} />
          <Text style = {styles.text}>Discount and deals</Text>
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    body: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#772E94'
    },

    text: {
      fontSize: 40,
      fontWeight: 'bold',
      margin: 10,
      color: 'white',
    },

    image: {
      margin: 10,
      width: 200,
      height: 100
    }
  }
 )