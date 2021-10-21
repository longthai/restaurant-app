import React, { useState } from 'react'; 
import { StyleSheet,Text,View, Image} from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { isWhiteSpaceLike } from 'typescript';

export default function Location({navigation}) {
    const onPressHandler = () => {
      navigation.navigate('Menu');
    }

    const [Items,setItems] = useState([
      {key: '1', name: 'Sello Shopping Center, Espoo'},
      {key: '2', name: 'Iso Omena Shopping Center, Espoo'},
      {key: '3', name: 'Ristikko Shopping Center, Helsinki'},
      {key: '4', name: 'Myyrmanni Shopping Center, Vantaa'},
      {key: '5', name: 'Hertsi Shopping Center, Helsinki'},
      {key: '6', name: 'Ratina Shopping Center, Tampere'},
      {key: '7', name: 'Entresse Shopping Center, Espoo'},
      {key: '8', name: 'Hansakortteli Shopping Center, Turku'},
      {key: '9', name: 'Colombus Shopping Center, Helsinki'}
    ])
  
     return (

        <View style = {styles.body}>
            <Image style = {styles.image} source = {require('../assets/logo.png')} />
            <Text style = {styles.text}>
                Our locations
            </Text>

            <FlatList   
              data={Items}
              renderItem={({item}) => (
                <View style = {styles.item}>
                  <Text style = {styles.location}>{item.name}</Text>
                  
                </View>
              )} 
            />
            
            {/*
            <Pressable onPress={onPressHandler} style = {({pressed}) => ({backgroundColor: pressed? '#ddd':'#0f0'})}>
                <Text>Go to Home</Text>
            </Pressable>
            */}
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
        color: 'white',
        margin: 20,
      },

      location: {
        fontSize: 20,
        margin: 20,
        color: '#772E94',
      },

      item: {
        width: '100%',
        margin: 10,
        alignSelf: 'flex-start',
        backgroundColor: '#F78C22',
        textAlign: 'center'
      },


      image: {
        margin: 10,
        width: 200,
        height: 100
      }
    }
   )