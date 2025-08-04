import React from "react";
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../Pages/Home'
import Detalhes from '../Pages/Detalhes'

const Stack = createStackNavigator();

export default function StackRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Home"
                component={Home}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen 
                name="Detalhes"
                component={Detalhes}
            />
        </Stack.Navigator>
    )
}