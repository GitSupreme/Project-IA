
import React, {useState} from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import {Image, Alert, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View, Modal, Platform, Pressable  } from 'react-native';


// function toSignup() {
//   navigation.navigate("SignUp");
// }

// function closeModal(){
//  setModalOpen(false);
// }

// function closeToSignup(){
//  this.toSignup();
//  this.closeModal();
// }

export default function Welcome({ navigation }) {
   const [ modalOpen, setModalOpen] = useState(false);
   var password;
   var email;
   
  return (
    <ImageBackground blurRadius={5} style={{flex:1}} source= {require("../assets/Background.png")}>
        <Modal          
          animationType = {"slide"}  
          transparent = {true}  
          visible = {modalOpen}> 

              <View style={styles.modal}>
                  <View style={styles.modalClose}>  
                    <MaterialIcons
                      name='close'
                      size={24}
                      onPress = {()=> setModalOpen(false)}
                    />  
                  </View>  

                  <View style={{flex: 9.5}}>  
                    <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 20}}>Sign-In to your account</Text>
                    <Image style={styles.LoginImage} 
                    source={{uri: 'https://cdn-icons-png.flaticon.com/128/149/149071.png'}}/>
                    <TextInput 
                      onChangeText={(value) => {email = value;}}
                      maxLength={50} 
                      style={styles.Email} 
                      placeholder='  E-mail'
                    />
                    <TextInput 
                      onChangeText={(value) => {password = value;}}
                      maxLength={50} 
                      style={styles.Email} 
                      placeholder='  Password'
                    />
                    <TouchableOpacity
                      style={styles.modalLoginButton}
                      onPress={(pword, eml)=> 
                        { 
                          eml = email; 
                          pword = password; 
                          if(eml=="k" && pword=="s") 
                          {navigation.navigate('Home'); 
                          setModalOpen(false);
                          } else {
                            Alert.alert("Invalid email or Password!!");
                          }
                        }
                        }>
                        <Text style={{paddingTop: 6, fontSize: 20}}>
                          Login
                        </Text>
                    </TouchableOpacity>

                    <Text style={{paddingTop: 100, marginLeft: 30, fontSize: 15}}>
                      Don't have an account? 
                    </Text>
                    <Pressable onPress ={()=> 
                      {setModalOpen(false); 
                      navigation.navigate('SignUp');
                      }}> 
                      <Text style={{color:'blue', alignSelf:'center', paddingTop: 30}}>Sign Up</Text>
                    </Pressable> 

                  </View>  
                  
              </View>

          
        </Modal>  
          <View style={styles.container}>
            <Image 
              style={{width: 150, height: 200, margin: 20}}
              source={require('../assets/MyLogo.png')}/>
                <Text style={{fontWeight: 'bold', fontSize: 30, color: 'black'}}>
                  WELCOME TO A-TECH</Text>
                <Text style={{color:'black', marginTop: 5, fontWeight:'bold' }}>
                  A premium online store for high quality phones and</Text>
                <Text style={{color:'black', fontWeight:'bold' }}>accessories</Text>  
              <TouchableOpacity 
                // 
                onPress = {() => setModalOpen(true)}
                style={styles.LoginButton}>
                <Text style={{color:'black', fontWeight: 'bold', paddingTop:5, fontSize: 18}}>Get</Text>
                <Text style={{color:'black', fontWeight: 'bold', paddingBottom:5, fontSize: 18}}>Started</Text>
              </TouchableOpacity>
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
  
  LoginImage: {
    borderRadius: 20,
    width: 100, 
    height: 100, 
    margin: 10,
    marginLeft:50,
    alignSelf: 'baseline'

  },

  Email: {
    height: 30,
    marginTop: 20,
    width: 200,
    borderRadius: 10,
    borderWidth: 0.5,
    backgroundColor: 'white',
},

  modal: {  
    flex: 0.95,
    justifyContent: 'center',  
    alignItems: 'center',   
    backgroundColor : "#D4D4D4",   
    // height: 300 ,  
    width: '85%',  
    borderRadius:20,  
    borderWidth: 1,  
    borderColor: '#fff',    
    marginTop: 40,  
    marginLeft: 40,  
     
     },  
     
  modalClose:{
    padding: 10,
    flex: 0.5, 
    justifyContent: 'flex-start', 
    alignSelf: 'flex-end'
  },

  modalLoginButton: {
    
    marginLeft:50,
    alignContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 40, 
    marginTop:40, 
    borderColor:'white', 
    borderRadius:20, 
    borderWidth:2, 
    fontWeight:'bold', 
    backgroundColor: 'white'

  },

  LoginButton: {
    justifyContent:'center',
    alignItems: 'center',
    width: 100, 
    marginTop:40, 
    borderColor:'white', 
    borderRadius:15, 
    borderWidth:2, 
    fontWeight:'bold', 
    backgroundColor: 'white'

  }
});
