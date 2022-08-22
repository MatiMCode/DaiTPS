import { TouchableOpacity, Text } from "react-native";

export default function SearchBtn(props){
  return(
    <TouchableOpacity
    style={{width:60, height:60, backgroundColor:'green', borderRadius:99, position:'absolute', bottom:30, right:30}}
    onPress={()=>{props.navigation.navigate('Search')}}>
      <Text style={{textAlign:'center', marginVertical:-25, color:'white', fontWeight:'bold', fontSize:70}}>
        +
      </Text>
    </TouchableOpacity>
  )
}