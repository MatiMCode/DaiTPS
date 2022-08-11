import axios from "axios";
import { useState } from "react";
import { Text } from "react-native"
export default function Home({route, navigation}){
    //const apikey = route.params; esta key no anda xd
    const apiKey = 'd682eb7f50ff4a33a3f48ed024fe5479'
    const [platos, setPlatos] = useState([]);
    
    const getPlatos = async () => {
        axios.get('https://api.spoonacular.com/food/menuItems/search?apiKey=d682eb7f50ff4a33a3f48ed024fe5479&query=%27%27&number=25',{})
        .then(function (response){
            setPlatos(response)
            console.log(platos)
        }).catch(
            console.log('error')
        )
    }
    getPlatos();
    return(
        <Text>{apiKey}</Text>
    )
}