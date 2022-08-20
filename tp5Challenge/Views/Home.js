import axios from "axios";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native"
import React from "react";
import MenuItem from "../Components/MenuItem";
import { RecipesProvider } from "../Components/RecipeContext";
import MenuList from "../Components/MenuList";
export default function Home({route, navigation}){
    //const apikey = route.params; esta key no anda xd
    //const apiKey = '9d011376615d43b78d523af4e6e1fc9b'
    
    const {recipes} = route.params

    console.log(recipes)

    return (
        <View>
            <RecipesProvider value={recipes}>
                <View style={styles.container}>
                    <MenuList/>
                </View>
            </RecipesProvider>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
    },
  });