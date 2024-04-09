import {  StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import SanPhamYeuThich from '../Comp/SanPhamYeuThich';
import Home from '../Comp/Home';
import SanPhamChiTiet from '../Comp/SanPhamChiTiet';
import SettingsBlock from '../Comp/Settinng';
const Tab = createBottomTabNavigator();





const BottomNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBarOptions={{
        labelStyle: { display: 'none' }, // Ẩn chữ dưới biểu tượng
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="SPYeuThich" 
        component={SanPhamYeuThich} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="SPChiTiet" 
        component={SanPhamChiTiet} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="information-circle" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="Setting" 
        component={SettingsBlock} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomNav;
