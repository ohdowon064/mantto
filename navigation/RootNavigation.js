import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import InsertMajorPage from '../screens/InsertMajorPage';

import PassionPage from '../screens/PassionPage';

import InsertTalentPage from '../screens/InsertTalentPage';

import LoginSignUpStartPage from '../screens/LoginSignUpStartPage';

import SignUpFirstPage from '../screens/SignUpFirstPage';

import LoginPage from '../screens/LoginPage';

import TalentRegisterContainer from '../screens/TalentRegisterContainer';

import MainPage from '../screens/MainPage';

import Profile from '../screens/Profile';

import Chat from '../screens/Chat';

import HomeSvg from '../screens/src/svg/home.svg';

import ProfileSvg from '../screens/src/svg/profile.svg';

import ChatSvg from '../screens/src/svg/chat.svg';

const Stack = createStackNavigator();

const Tabs = createBottomTabNavigator();

function TabNavigation() {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Home') {
            return (
              <HomeSvg
                color={color}
                width={35}
                height={35}
              />
            );
          }
          if (route.name === 'Profile') {
            return (
              <ProfileSvg
                color={color}
                width={35}
                height={35}
              />
            );
          }
          if (route.name === 'Chat') {
            return (
              <ChatSvg
                color={color}
                width={35}
                height={35}
              />
            );
          }
          return null;
        },
      })}
      tabBarOptions={{
        showLabel: false,
        activeTintColor: 'red',
        inactiveTintColor: 'gray',
      }}
    >
      <Tabs.Screen name="Home" component={MainPage} />
      <Tabs.Screen name="Chat" component={Chat} />
      <Tabs.Screen name="Profile" component={Profile} />
    </Tabs.Navigator>
  );
}

const Navigation = () => (
  <>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }}
      >
        <Stack.Screen
          name="LoginSignUpStartPage"
          component={LoginSignUpStartPage}
        />
        <Stack.Screen
          name="LoginPage"
          component={LoginPage}
        />
        <Stack.Screen
          name="SignUpFirstPage"
          component={SignUpFirstPage}
        />
        <Stack.Screen
          name="InsertMajorPage"
          component={InsertMajorPage}
        />
        <Stack.Screen
          name="PassionPage"
          component={PassionPage}
        />
        <Stack.Screen
          name="InsertTalentPage"
          component={InsertTalentPage}
        />
        <Stack.Screen
          name="ProfilePage"
          component={Profile}
        />
        <Stack.Screen
          name="TalentRegisterPage"
          component={TalentRegisterContainer}
        />
        <Stack.Screen
          name="MainPage"
          component={TabNavigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </>
);

export default Navigation;
