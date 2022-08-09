import { StyleSheet, View, TextInput, Button,Text, TouchableOpacity } from "react-native"
import { useState } from "react"
import axios from "axios"
export default function LogIn({navigation}){
//challenge@alkemy.org

    const [mail, setMail] = useState('')
    const [contra, setContra] = useState('')
    const [error, setError] = useState(false)
    const [cargando, setCargando] = useState(false)
    const validar = async (email, contra) =>{
        setCargando(true)
        axios.post('http://challenge-react.alkemy.org/?email='+email+'&password='+contra,{})
        .then(function (response){
            setCargando(false)
          navigation.navigate('Home', response.data.token)
          return response.data.token
        })
        .catch(function (error){
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

        <TouchableOpacity  onPress={()=>{validar(mail, contra)}}>
          <View style={styles.btn}>
            <Text style={{color:'white', fontWeight:'bold'}}>{cargando?'Cargando...':'Iniciar sesión'}</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
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


  