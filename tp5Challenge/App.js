import React from 'react';
import LogIn from './Views/LogIn';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Views/Home';
import Search from './Views/Search';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Log In">
          <Stack.Screen name="Log In" component={LogIn} options= {{headerShown: false}}/>
          <Stack.Screen name="Home" component={Home} options= {{headerShown: false}} />
          <Stack.Screen name="Search" component={Search} options= {{headerShown: false}} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

