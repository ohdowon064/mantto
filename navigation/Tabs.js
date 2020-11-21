import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../screens/Home";
import Chat from "../screens/Chat";
import Profile from "../screens/Profile";

const Tabs= createBottomTabNavigator();

const TabsNavigation = ({ navigation }) => ( 
  <Tabs.Navigator tabBarOptions={{
      showLabel:false,
  }}>
    <Tabs.Screen name="Home" component={Home} navigation={navigation}/> 
    <Tabs.Screen name="Chat" component={Chat} navigation={navigation}/> 
    <Tabs.Screen name="Profile" component={Profile} navigation={navigation}/> 
  </Tabs.Navigator>
);

export default TabsNavigation;