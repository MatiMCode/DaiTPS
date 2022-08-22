import axios from "axios";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native"
import React from "react";
import MenuItem from "../Components/MenuItem";
import { RecipesProvider } from "../Components/RecipeContext";
import MenuList from "../Components/MenuList";
import SearchBtn from "../Components/SearchBtn";
export default function Home({route, navigation}){
    //const apikey = route.params; esta key no anda xd
    //const apiKey = '9d011376615d43b78d523af4e6e1fc9b'
    
    const [recipes, setRecipes] = useState(route.params.recipes)
    console.log(recipes)
    const deleteRecipe = (id) => {
        console.log(id)
        setRecipes(recipes.filter(recipe => recipe.id!=id))
      }

    return (
        <>
            <RecipesProvider value={{recipes:recipes, setRecipes:setRecipes, deleteRecipe:deleteRecipe}}>
                <View style={styles.container}>
                    <MenuList/>
                </View>
            </RecipesProvider>
                    <SearchBtn navigation={navigation}/>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      marginTop:50,
    },
  });