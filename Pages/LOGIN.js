import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet, Text, View } from 'react-native';

export default function Login({ navigation }){

    return (
        <View style={styles.container}>
            <Text style={{color: 'white'}}>This is the Login page</Text>
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
  
});
