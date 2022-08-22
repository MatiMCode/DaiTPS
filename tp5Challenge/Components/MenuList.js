import { useContext } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import MenuItem from "./MenuItem";
import RecipesContext from "./RecipeContext";
import React from "react";
//      {things.map((e,index)=>{return(<MenuItem key={index} Item={e}/>)})}

export default function MenuList(){
  const {recipes, setRecipes, deleteRecipe} = useContext(RecipesContext)
  console.log(recipes)
  

  const renderMenuItem = (recipe) =>(
    <MenuItem item={recipe.item} delete={deleteRecipe}/>
  )
  
  return (
    <FlatList 
    data={recipes}
    numColumns={2}
    renderItem={renderMenuItem}
    style={styles.list}
    columnWrapperStyle={{justifyContent:'center'}}
    />
  );
}

const styles = StyleSheet.create({
  list:{
    width:'100%',
  }
})