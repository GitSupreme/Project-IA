import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Welcome from './Pages/Welcome.js';
import SignUp from './Pages/signUp';
import Home from './Pages/Home.js';

const Stack = createNativeStackNavigator();

function App(){
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false}} initialRouteName='Welcome'>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='Welcome' component={Welcome}/>
            <Stack.Screen name='SignUp' component={SignUp}/>

        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
