import axios from "axios"
import React, { useState } from "react"
import { Text, View, TextInput, StyleSheet, FlatList } from "react-native"
import MenuItem from "../Components/MenuItem"
import RecipesContext from "../Components/RecipeContext"
export default function Search(){
  const [recipes, setRecipes] = useState([])
  
  const searchRecipes = async (input) => {
    const {data} = await axios.get('https://api.spoonacular.com/recipes/complexSearch/?apiKey=9d011376615d43b78d523af4e6e1fc9b&%20diet=vegan&number=15&addRecipeInformation=true&query='+input)
    return data.results
  }

  const [recipesToAdd, setRecipesToAdd] = useState([])

  const addToList = recipe =>{
    setRecipesToAdd([...recipesToAdd, recipe])
    console.log('agregado')
  }

  const deleteFromList = recipe => {
    setRecipesToAdd(recipesToAdd.filter(val=>val!=recipe))
    console.log('agregadont')
  }

  const handleSearch = (search) =>{
    if(search.length >=2){
      //setSearch(newSearch)
      //setSearch(newSearch)
      searchRecipes(search).then(res=>{console.log(res); setRecipes(res)})
    }else{
      setRecipes([])
    }
  }

  const renderMenuItem = (recipe) =>(
    <MenuItem item={recipe.item} isSearch={true} addToList={addToList} deleteFromList={deleteFromList}/>
  )
  
  return(
    <>
    <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={search=>{handleSearch(search)}}
          placeholder="Buscar Receta"
          keyboardType="default"
          defaultValue=""
        />
        <Text>{recipesToAdd.length} plato/s agregados</Text>
        <FlatList 
        data={recipes}
        numColumns={2}
        renderItem={renderMenuItem}
        style={styles.list}
        columnWrapperStyle={{justifyContent:'center'}}
        />
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    height:'100%',
    alignItems: 'center',
    paddingTop:60
  },input: {
    width:'80%',
    height:60,
    margin: 12,
    borderWidth: 1,
    padding: 8,
    borderRadius:5,
  },list:{
    width:'100%'
  }
});