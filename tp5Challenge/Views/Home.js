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
    const things = [
        {id: 1, name: 'thing 1', length: 5},
        {id: 2, name: 'thing 2', length: 2},
        {id: 3, name: 'thing 3', length: 6},
        {id: 4, name: 'thing 4', length: 10},
        {id: 5, name: 'thing 5', length: 1}
    ]

    const [recipes, setRecipes] = useState([]);

    


    useEffect(()=>{
        console.log(navigation)
        
    },[])

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