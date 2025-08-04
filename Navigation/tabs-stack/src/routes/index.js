
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Feather from '@expo/vector-icons/Feather';

import StackRoutes from './stackRoutes';
import Sobre from '../Pages/Sobre'
import Contato from '../Pages/Contato';

export default function Routes() {
  const Tab = createBottomTabNavigator();
  return (
      <Tab.Navigator
        screenOptions={{
          // Todas as propriedades que pasarmos aqui, irá atingir todas as screens
          headerShown: false,
          tabBarHideOnKeyboard: true, // Ativamos para que o tabBar não sobreponha o teclado 
          tabBarShowLabel: false, // tirar os labels (texto) do tab
          tabBarActiveTintColor: '#ff0000', // altera a cor do icone quando ta ativo

          tabBarStyle:{
            backgroundColor: '#222', 
            borderTopWidth: 0 // para garantir que não vá haver uma borda entre a View e o Tab
          }
        }}
      >
        <Tab.Screen 
          name='HomeStack' 
          component={StackRoutes}
          options={{
            tabBarIcon: (color, size) => {
              return( <Feather name='home' color={color} size={size}/>)
            }
          }}
        />

        <Tab.Screen 
          name='Sobre' 
          component={Sobre}
          options={{
            tabBarIcon: (color, size) => {
              return ( <Feather name='file-text' color={color} size={size}/>)
            }
          }}
        />

        <Tab.Screen 
          name='Contato' 
          component={Contato}
          options={{
            // headerShown: false, // Para esconder o header apenas dessa Screen
            tabBarIcon: (color, size) => {
              return ( <Feather name='phone-call' color={color} size={size}/>)
            }
          }}
        />
      </Tab.Navigator>
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
