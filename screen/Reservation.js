import React from 'react'; 
import {StyleSheet,Text,View, Image, Button} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


export default function Reservation() {
    return (
      <View style = {styles.body}>
          <Image style = {styles.image} source = {require('../assets/logo.png')} />
          <Text style = {styles.text}>Make a reservation</Text>
          <View style = {{flexDirection: 'row', margin: 20, marginTop: 30}}>
            <Text style = {styles.textfield}>Numer of guest:</Text> 
            <TextInput style = {styles.input} placeholder = {'1'} placeholderTextColor = 'white' keyboardType = 'numeric'/>
          </View>
          <View style = {{flexDirection: 'row', margin: 20}}>
            <Text style = {styles.textfield}>Choose date:</Text> 
            <TextInput style = {styles.input} placeholder = {'1'} placeholderTextColor = 'white' keyboardType = 'numeric'/>
          </View>
          <View style = {{flexDirection: 'row', margin: 20, marginBottom: 40}}>
            <Text style = {styles.textfield}>Pick time:</Text> 
            <TextInput style = {styles.input} placeholder = {'1'} placeholderTextColor = 'white' keyboardType = 'numeric'/>
          </View>
          <Button title='Confirm' color = '#F78C22'/>

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

    textfield: {
      fontSize: 20,
      margin: 10,
      color: 'white',
    },

    input: {
      width: 100,
      borderWidth: 1,
      borderRadius: 55,
      borderColor: '#F78C22',
      textAlign: 'center',
      fontSize: 20,
      color: '#F78C22'
    },

    image: {
      margin: 10,
      width: 200,
      height: 100
    }
  }
 )