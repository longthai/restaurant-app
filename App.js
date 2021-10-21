/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import { NavigationContainer, ThemeProvider } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import React from 'react'; 
 import Location from './screen/Location';
 import Menu from './screen/Menu';
 import Discount from './screen/Discount';
 import Reservation from './screen/Reservation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './screen/Profile';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
 
 const Stack = createNativeStackNavigator();
 const Tab = createBottomTabNavigator();
 const Drawer = createDrawerNavigator();
 
 function App() {
   return (
     <NavigationContainer> 
        <Tab.Navigator 
          screenOptions = {({route}) => ({
            tabBarStyle:{backgroundColor:'#772E94'},
            headerShown: false,
            tabBarShowLabel:false,

            tabBarIcon: (focused, size, color) => {
              let iconName;
              if (route.name === 'Location') {
                iconName = 'map';
                size = focused ? 25:20;
                color = focused ? '#F78C22' : 'gray'
              } else if (route.name === 'Menu') {
                iconName = 'bars';
                size = focused ? 25:20;
                color = focused ? '#F78C22' : 'gray'
              } else if (route.name === 'Discount') {
                iconName = 'tag';
                size = focused ? 25:20;
                color = focused ? '#F78C22' : 'gray'
              } else if (route.name === 'Reservation') {
                iconName = 'bookmark';
                size = focused ? 25:20;
                color = focused ? '#F78C22' : 'gray'
              }
              return (
                <FontAwesome name = {iconName} size = {size} color = {color}/>
              )  
            }
          })}

        > 
          <Tab.Screen name = "Location" component = {Location}/> 
          <Tab.Screen name = "Menu" component = {Menu}/>
          <Tab.Screen name = "Discount" component = {Discount}/>
          <Tab.Screen name = "Reservation" component = {Reservation}/>
        </Tab.Navigator>
     </NavigationContainer>
   )
 }
 
 export default App;  