/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useState } from 'react';


import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { State } from 'react-native-gesture-handler';

 import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import SearchScreen from './screens/SearchScreen';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
  StatusBar,
  Touchable,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const Stack = createStackNavigator();

/*
const getUserId = async () => {
  try {
    const value = await AsyncStorage.getItem('@storage_Key')
    if (value !== null) {
      return value
    }
  } catch (e) {
  console.log(e)
  }
}

const logged = async () => {
  try {
    let user = await getUserId()
    if (!!user) {
      return user ;
    }else{
      console.log("porra fefe")
      return null
    }
  } catch (e) {
    console.log(e)
  }
}
let loggedUser  = logged();

*/
function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login"
          screenOptions={{
            gestureEnabled: true,
            gestureDirection: "horizontal",
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
          }}>
          <Stack.Screen name="Login" options={{ headerShown: false }} component={LoginScreen} />
          <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
         <Stack.Screen name="Search" options={{ headerShown: false }} component={SearchScreen} />
          <Stack.Screen name="Details" options={{ headerShown: false }} component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }



export default App;




