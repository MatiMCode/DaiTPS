import { useContext } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import MenuItem from "./MenuItem";
import RecipesContext from "./RecipeContext";
import React from "react";
//      {things.map((e,index)=>{return(<MenuItem key={index} Item={e}/>)})}

export default function MenuList(){
  const things = useContext(RecipesContext)
  
  const renderMenuItem = (recipe) =>(
    <MenuItem item={recipe.item}/>
  )
  
  return (
    <FlatList
    data={things}
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