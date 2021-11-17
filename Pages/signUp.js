import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

export default function SignUp({ navigation }){

    return (
     
        <View style={styles.container}>  
            <View style={{height: 600, width: 300, marginBottom: 50}}> 
            <Image 
              style={{width: 80, alignSelf:'center', height: 100, margin: 20}}
              source={require('../assets/MyLogo.png')}/>

            <View style={styles.formContainer}>
                <Text style={styles.textInputLabel}>Your name</Text>
                <TextInput
                    style={styles.textInput}
                />
                <Text style={styles.textInputLabel}>Email</Text>
                <TextInput
                    style={styles.textInput}
                />
                <Text style={styles.textInputLabel}>Password</Text>
                <TextInput
                    placeholder=' At least 6 characters'
                    style={styles.textInput}
                />
                <View style={{flexDirection:'row', alignSelf:'flex-start', marginLeft:20}}>
                    <Ionicons name="alert" size={20} color="#63C5DA"/><Text style={{fontSize:12}}>Password must be at least 6 characters</Text> 
                </View>
                <Text style={styles.textInputLabel}>Your name</Text>
                <TextInput
                    style={styles.textInput}
                />
                <TouchableOpacity>
                    <View style={styles.button}>
                        <Text>Create your A-Tech account</Text>
                    </View>
                </TouchableOpacity>
                <Text style={{padding:10}}>
                By creating an account, you agree to A-Tech's <Text style={{color:'blue'}}>Conditions of Use</Text> and <Text style={{color:'blue'}}>Privacy Notice</Text>.
                </Text> 

            </View>    

            </View>

        </View>
        
    );
}
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    margin: 10,
    alignItems: "center",
    backgroundColor: "#63C5DA",
    borderRadius: 10,
    width: 250,
    padding: 10
  },

  formContainer: {
    paddingTop:10,
    alignItems: 'center', 
    borderWidth: 0.3, 
    borderRadius: 10, 
    height: 500, 
    width: 300, 
    justifyContent: 'flex-start'
  },

  Header : {
    padding: 10,
    flex: 0.5, 
    justifyContent: 'flex-start', 
    alignSelf: 'flex-end'
  },

  textInputLabel: {
        fontWeight: 'bold',
        fontSize: 18,
        alignSelf: 'flex-start',
        marginLeft: 27,
        marginTop: 10,
        marginBottom: 10,
  },

  textInput: {

    borderWidth: 0.5, 
    borderRadius: 10, 
    width: 250, 
    height: 30,
    marginBottom:10,

  }

});