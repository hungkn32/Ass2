import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Welcome from '../Screen/Welcom';
import Login from '../Screen/Login';
import Sign_up from '../Screen/Sign_up';
import Home from '../Comp/Home';
import BottomNav from './BottomNav';
import Profile from '../Comp/Profile';
import PhoneInfo from '../Comp/PhoneInfo';
import CustomSettings from '../Comp/CustomSettings';
import Resignter from '../Screen/Register';
const Stack = createNativeStackNavigator();

const StackNav = () => {

  return (
    <NavigationContainer >
        <Stack.Navigator initialRouteName='Welcom' >
            <Stack.Screen name='Welcom' component={Welcome} options={{headerShown:false}}/>
            <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
            <Stack.Screen name='bottomnav' component={BottomNav} options={{headerShown:false}}/>
            <Stack.Screen name='Signup' component={Resignter}/>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='Profile' component={Profile}/>
            <Stack.Screen name='PhoneInfo' component={PhoneInfo}/>
            <Stack.Screen name='CustomSettings' component={CustomSettings}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNav

const styles = StyleSheet.create({})