import { StyleSheet, Text, View, Image } from "react-native";

export default function MenuItem(props){
  console.log(props.item)
  return (
    <View style={styles.card}>
      <Image style={{width:'100%', height:100}} source={props.item.image}/>
      <Text>{props.item.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card:{
    backgroundColor:'#fff',
    borderRadius:20,
    padding:10,
    margin:5,
    width:'40%'
  }
})