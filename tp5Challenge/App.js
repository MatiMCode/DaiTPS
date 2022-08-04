import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios'; 

const client = axios.create({ baseURL: 'https://dog.ceo/api/breeds/image/random'});

export const get = async () =>{
  return client.get('').then(response => response.data)
  .catch(error => {
    console.log(error)
    throw error;
  });
}

export const post = async (data) =>{
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
