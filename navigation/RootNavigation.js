import { NavigationContainer } from '@react-navigation/native';

import {createStackNavigator} from "@react-navigation/stack";

import InsertMajorPage from "./screens/InsertMajorPage";

import PassionPage from './screens/PassionPage';

import InsertTalentPage from "./screens/InsertTalentPage";

import LoginSignUpStartPage from "./screens/LoginSignUpStartPage";

import SignUpFirstPage from "./screens/SignUpFirstPage";

import LoginPage from './screens/LoginPage';

import MainPage from './screens/MainPage';

import TabsNavigation from './Tabs';

const Stack = createStackNavigator();

const Navigation = () => {
  return
  (
    <>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerShown : false
          }}>
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
                name="MainPage"
                component={MainPage}
              />
              <Stack.Screen
                name="MainPage"
                component={TabsNavigation}
              />
          </Stack.Navigator>             
        </NavigationContainer>
    </>
  )
}

export default Navigation;