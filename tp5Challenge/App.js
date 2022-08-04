import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useState } from 'react';
import axios from 'axios'; 

const client = axios.create({ baseURL: 'https://dog.ceo/api/breeds/image/random'});

const get = async () =>{  //export
  return client.get('').then(response => response.data)
  .catch(error => {
    console.log(error)
    throw error;
  });
}

const post = async (data) =>{ //export
  return client.post('', {...data}).then(response => response.data)
  .catch(error => {
    console.log(error)
    throw error;
  });
}





export default function App() {
  return (
    <View style={styles.container}>
      <Text>AUGHHHHHHHHHHHHH</Text>
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
  },
});
