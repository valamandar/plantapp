import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import COLORS from './constants/colors'

import Home from './screens/Home'
import Details from './screens/Details'


const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.white} />
      <Stack.Navigator screenOptions={{ header : () => null }} >
        <Stack.Screen component={Home} name="Home"/>
        <Stack.Screen component={Details} name="Details"/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default App;