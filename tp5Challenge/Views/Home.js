import axios from "axios";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native"
import React from "react";
import MenuItem from "../Components/MenuItem";
import { RecipesProvider } from "../Components/RecipeContext";
import MenuList from "../Components/MenuList";
export default function Home({route, navigation}){
    //const apikey = route.params; esta key no anda xd
    //const apiKey = 'd682eb7f50ff4a33a3f48ed024fe5479'
    const things = [
        {id: 1, name: 'thing 1', length: 5},
        {id: 2, name: 'thing 2', length: 2},
        {id: 3, name: 'thing 3', length: 6},
        {id: 4, name: 'thing 4', length: 10},
        {id: 5, name: 'thing 5', length: 1}
    ]
    return (
        <View>
            <RecipesProvider value={things}>
                <MenuList/>
            </RecipesProvider>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },input: {
      width:300,
      margin: 12,
      borderWidth: 1,
      padding: 8,
      borderRadius:5,
    },btn:{
        backgroundColor:'red',
        alignItems:'center',
        padding:8,
        borderRadius:5,
        width:300
    }
  });