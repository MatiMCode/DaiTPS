import { StyleSheet, View, TextInput, Button } from "react-native"
import { useState } from "react"
import axios from "axios"
export default function LogIn({navigation}){

    const [mail, setMail] = useState('')
    const [contra, setContra] = useState('')
    const validar = async (email, contra) =>{
        axios.post('http://challenge-react.alkemy.org/?email='+email+'&password='+contra,{})
        .then(function (response){
          console.log(response.data.token)
          navigation.navigate('Home')
          return response.data.token
        })
        .catch(function (error){
          console.log(error)
        })
      }

    return(
        <View>
        <TextInput
          style={styles.input}
          onChangeText={()=>{setMail(event.target.value)}}
          placeholder="ingresar mail"
          keyboardType="numeric"
        />
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          onChangeText={()=>{setContra(event.target.value)}}
          placeholder="ingresar contraseña"
          keyboardType="numeric"
        />
        <Button onPress={()=>{validar(mail, contra)}} title='iniciar sesión'/>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },stretch: {
      width: 200,
      height: 200,
      resizeMode: 'stretch',
    },input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });