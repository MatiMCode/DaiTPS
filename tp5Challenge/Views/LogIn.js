import { StyleSheet, View, TextInput, Button,Text, TouchableOpacity } from "react-native"
import { useEffect, useState } from "react"
import axios from "axios"
export default function LogIn({navigation}){
//challenge@alkemy.org

    const [mail, setMail] = useState('challenge@alkemy.org')
    const [contra, setContra] = useState('react')
    const [error, setError] = useState(false)
    const [cargando, setCargando] = useState(false)
    const [recipes, setRecipes] = useState(false)
    /*
    const getVeganRecipes = async () => {
      const {data} = await axios.get('https://api.spoonacular.com/recipes/complexSearch/?apiKey=9d011376615d43b78d523af4e6e1fc9b&%20diet=vegan&number=1&addRecipeInformation=true')
      return data.results
    }
    
    const getNormalRecipes = async () => {
      const {data} = await axios.get('https://api.spoonacular.com/recipes/complexSearch/?apiKey=9d011376615d43b78d523af4e6e1fc9b&%20diet=Whole30&number=1&offset=60&addRecipeInformation=true')
      return data.results
    }
    */
    useEffect(()=>{
      /*
      getVeganRecipes()
          .then(
            (vegan)=>{
              getNormalRecipes()
              .then(
                (normal)=>{
                  console.log([...vegan, ...normal])
                  setRecipes([...vegan, ...normal])
                }
              )
            }
          )
        */
       const data = require('../Components/fakeAPI.json')
       console.log(data.results)
       setRecipes(data.results)
    },[])

    const validar = async (email, contra) =>{
        setCargando(true)
        axios.post('http://challenge-react.alkemy.org/?email='+email+'&password='+contra,{})
        .then(()=>{
          setCargando(false)
          console.log(recipes)
          navigation.navigate('Home', {recipes})
        })
        .catch(function (){
            setCargando(false)
            setError(true)
        })
      }

    return(
        <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={newMail => setMail(newMail)}
          placeholder="ingresar mail"
          keyboardType="default"
          defaultValue="challenge@alkemy.org"
        />
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          onChangeText={newContra => setContra(newContra)}
          placeholder="ingresar contraseña"
          keyboardType="default"
          defaultValue="react"
        />
        <Text>{error?'Contraseña o usuario incorrecto':''}</Text>

        <TouchableOpacity  onPress={()=>{!recipes?'':validar(mail, contra)}}>
          <View style={styles.btn}>
            <Text style={{color:'white', fontWeight:'bold'}}>{cargando?'Cargando...':'Iniciar sesión'}</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      height:'100%',
      backgroundColor: '#fff',
      alignItems: 'center',
      paddingTop:100,
    },input: {
      width:300,
      margin: 12,
      borderWidth: 1,
      padding: 8,
      borderRadius:5,
    },btn:{
        backgroundColor:'red',
        alignItems:'center',
        padding:8,
        borderRadius:5,
        width:300
    }
  });


  