import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Login from "./Pages/LOGIN";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Stack = createNativeStackNavigator();

function ToLogin(){
  return(  
    <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name ='Login' component={Login} />
          </Stack.Navigator>
        </NavigationContainer>
    </View>
  
  );
}

export default function App() {
  return (
    
    <View style={styles.container}>
      <Image 
      style={{width: 150, height: 150, margin: 20}}
      source={{uri: 'https://th.bing.com/th/id/OIP.LLtu4UX5G_H2TaYBUM7TeQAAAA?w=148&h=180&c=7&r=0&o=5&pid=1.7'}}/>
      <Text style={{fontWeight: 'bold', fontSize: 30, color: 'white'}}>WELCOME TO A-TECH</Text>
      <Text style={{color:'white', }}>A premium online store for high quality phones and accessories</Text>
      <TouchableOpacity onPress = {ToLogin} style={styles.LoginButton}>
        <Text style={{color:'black', fontWeight: 'bold', padding:10}}>Login</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  LoginButton: {
    alignItems: 'center',
    width: 100, 
    marginTop:40, 
    borderColor:'white', 
    borderRadius:20, 
    borderWidth:2, 
    fontWeight:'bold', 
    backgroundColor: 'white'

  }
});
