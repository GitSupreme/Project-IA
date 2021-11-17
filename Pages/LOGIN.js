import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Image, ImageBackground, StyleSheet, Text, TextInput, View} from 'react-native';

export default function Login({ navigation }){

    return (

      <ImageBackground style={{flex:1}} 
      source={{uri: 'https://th.bing.com/th/id/R.922b559df0f8e6315a770ecdca06e404?rik=84x26yEpOU46Pg&pid=ImgRaw&r=0'}}>
        <View style={styles.container}>
          <View style={{borderWidth: 1, backgroundColor: '#d8d8d8', borderColor: '#9b9b9b',height : 500, alignItems: 'center',borderRadius:20, width: 400}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Sign-In to your account</Text>
            <Image style={styles.LoginImage} source={{uri: 'https://cdn-icons-png.flaticon.com/128/149/149071.png'}}/>
          <TextInput maxLength={10} style={styles.Email} placeholder='E-mail'/>
          </View>
        
        </View>

      </ImageBackground>
        
    );
}
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  Email: {
      height: 30,
      marginTop: 20,
      width: 200,
      borderRadius: 10,
      borderWidth: 0.5,
      backgroundColor: 'white',
  },

  LoginImage: {
    borderRadius: 20,
    width: 150, 
    height: 150, 
    margin: 20,

  }
  
});
