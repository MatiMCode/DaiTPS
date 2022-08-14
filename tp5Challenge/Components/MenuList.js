import { useContext } from "react";
import { StyleSheet, View } from "react-native";
import MenuItem from "./MenuItem";
import RecipesContext from "./RecipeContext";

export default function MenuList(){
  const things = useContext(RecipesContext)
  return (
    <View style={styles.grid}>
      {things.map((e,index)=>{return(<MenuItem key={index} Item={e}/>)})}
    </View>
  );
}

const styles = StyleSheet.create({
  grid:{
    flex:4,
  }
})