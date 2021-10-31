import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Welcome from './Pages/Welcome.js';
import Login from './Pages/Login.js'

const Stack = createNativeStackNavigator();

function App(){
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Welcome'>
            <Stack.Screen name='Login' component={Login}/>
            <Stack.Screen options={{ title:'ADVANCED TECH'}} name='Welcome' component={Welcome}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
