import { StyleSheet, Text, View } from "react-native";

export default function MenuItem(props){
  return (
    <View>
      <Text>{props.Item.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  
})