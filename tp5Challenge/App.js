import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { useState, useEffect } from 'react';

import axios from 'axios'; 

const client = axios.create({ baseURL: 'https://dog.ceo/api/breeds/image/random'});


const post = async (data) =>{ //export
  return client.post('', {...data}).then(response => response.data)
  .catch(error => {
    console.log(error)
    throw error;
  });
}





export default function App() {
  const [loading, setLoading] = useState(false);
  const [perro, setPerro] = useState('')
  const getPerro = async () =>{
    console.log('loading')
    setLoading(true);
    axios.get('https://dog.ceo/api/breeds/image/random', {})
      .then(function (response) {
       // console.log(response.data.message +'a');
       console.log('loaded')

       setLoading(false)
        setPerro(response.data.message)
        console.log(perro)
      })
      .catch(function (error) {
          console.log(error);
      })
      .then(function () {
          // always executed
      });
  }

  return (
    <View style={styles.container}>
      <Button onPress={getPerro} title='press for doggo'/>
      <Text>{loading?'loading':'loaded'}</Text>
      <Image
        style={styles.stretch}
        source={perro}
      />

      <StatusBar style="auto" />
    </View>
  );
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
  },
});
