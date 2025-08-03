import { StyleSheet, Text, View } from 'react-native';

import Home from './src/Pages/Home';
import Sobre from './src/Pages/Sobre';
import Contato from './src/Pages/Contato'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='Home'
          component={Home}
          options={{
            title: 'Tela inicio' ,
            headerStyle:{
              backgroundColor: '#121212',
            },
            headerTintColor: '#fff' // Cor do titulo
          }}
        />
        
        <Stack.Screen 
          name='Sobre'
          component={Sobre}
          options={{
            // headerShown: false // Não mostrar o header
          }}
        />

        <Stack.Screen 
          name='Contato'
          component={Contato}
        />  
      </Stack.Navigator>
    </NavigationContainer>
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
