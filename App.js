import 'react-native-gesture-handler';

import React from 'react';

import { Provider } from 'react-redux';

import store from "./screens/store/index";

import { NavigationContainer } from '@react-navigation/native';

import {createStackNavigator} from "@react-navigation/stack";

import InsertMajorPage from "./screens/InsertMajorPage";

import PassionPage from './screens/PassionPage';

import InsertTalentPage from "./screens/InsertTalentPage";

import LoginSignUpStartPage from "./screens/LoginSignUpStartPage";

import SignUpFirstPage from "./screens/SignUpFirstPage";

import LoginPage from './screens/LoginPage';

const Stack = createStackNavigator();

const App = () => {
    return (
      <>
      <Provider store={store}>
          <NavigationContainer>
            <Stack.Navigator>
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
            </Stack.Navigator>
          </NavigationContainer>
      </Provider>
      </>
    );
};

export default App;
