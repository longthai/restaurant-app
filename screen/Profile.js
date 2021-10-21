import React from 'react'; 
import {StyleSheet,Text,View,} from 'react-native';


export default function Profile() {
    return (
      <View style = {styles.body}>
          <Text style = {styles.text}>Profile page</Text>
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    body: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },

    text: {
      fontSize: 40,
      fontWeight: 'bold',
      margin: 10,
    }
  }
 )