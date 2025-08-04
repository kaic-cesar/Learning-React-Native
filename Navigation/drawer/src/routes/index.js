
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer'

import StackRoutes from './stackRoutes';
import Sobre from '../Pages/Sobre'
import Contato from '../Pages/Contato';

import CustomDrawer from '../components/CustomDrawer';

export default function Routes() {
  const Drawer = createDrawerNavigator();
  return (
      <Drawer.Navigator
        drawerContent={CustomDrawer}
        screenOptions={{
          headerShown: false,

          drawerActiveBackgroundColor: '#00dae4',
          drawerActiveTintColor: '#fff',

          drawerInactiveBackgroundColor: '#f1f1f1',
          drawerInactiveTintColor: '#000'
        }}
      >
        <Drawer.Screen 
          name='HomeStack'
          component={StackRoutes}
          options={{
            title: 'Inicio'
          }}
        />

        <Drawer.Screen 
          name='Sobre'
          component={Sobre}
        />

        <Drawer.Screen 
          name='Contato'
          component={Contato}
        />
      </Drawer.Navigator>
  );
}

