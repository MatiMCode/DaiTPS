import { useState } from "react";
import { StyleSheet, Text, View, Image, Touchable, TouchableOpacity } from "react-native";

export default function MenuItem(props){
  const [added, setAdded] = useState(false)
  console.log(props.item)
  return (
    <View style={styles.card}>
      <Image style={{width:'100%', height:100, borderRadius:20}} source={{uri:props.item.image}}/>
      <Text style={{paddingVertical:3}}>{props.item.title}</Text>
      <Text style={{marginBottom:3}}>{props.item.vegan?'Vegano':''}</Text>
      <Text style={{flex:1, padding:3, alignItems:'baseline'}}>${props.item.pricePerServing}</Text>
      <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        {props.isSearch?
        <>
          <TouchableOpacity style={{flex:1,alignItems:'center',backgroundColor:'green', borderRadius:5, padding:3, marginRight:6}}
          onPress={()=>{added?props.deleteFromList(props.item):props.addToList(props.item); setAdded(!added)}}>
            <Text style={{color:'white',fontWeight:'bold'}}>{added?'Eliminar':'Agregar'}</Text>
          </TouchableOpacity>
        </>
        :
        <>
        <TouchableOpacity style={{flex:1,alignItems:'center',backgroundColor:'green', borderRadius:5, padding:3, marginRight:6}}>
          <Text style={{color:'white',fontWeight:'bold'}}>Ver info</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={{flex:1,alignItems:'center',backgroundColor:'red', borderRadius:5, padding:3}}
        onPress={()=>{props.delete(props.item.id)}}>
          <Text style={{color:'white',fontWeight:'bold'}}>Eliminar</Text>
        </TouchableOpacity>
        </>
        }
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
    width:'40%',
  },
})