import { StyleSheet, Text, View, Image, Touchable, TouchableOpacity } from "react-native";

export default function MenuItem(props){
  console.log(props.item)
  return (
    <View style={styles.card}>
      <Image style={{width:'100%', height:100, borderRadius:'inherit'}} source={props.item.image}/>
      <Text style={{paddingVertical:3}}>{props.item.title}</Text>
      <View style={{flexDirection:'row'}}>
        <TouchableOpacity style={{flex:1,width:70,alignItems:'center',backgroundColor:'green', borderRadius:5, padding:3}}>
          <Text style={{color:'white',fontWeight:'bold'}}>Agregar</Text>
        </TouchableOpacity>
        <Text style={{flex:2, padding:3}}>${props.item.pricePerServing}</Text>
      </View>
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
  },
})