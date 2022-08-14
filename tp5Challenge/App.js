import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TextInput } from 'react-native';
import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios'; 
import LogIn from './Views/LogIn';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Views/Home';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Log In">
          <Stack.Screen name="Log In" component={LogIn} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },stretch: {
    width: 200,
    height: 200,
    resizeMode: 'stretch',
  },input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
