import React from "react";
import {View, Text, Button} from 'react-native'
import { useNavigation } from '@react-navigation/native' // Importando o meio de navegação

export default function Home(){
    const navigation = useNavigation();

    function navegaSobre(){
        navigation.navigate('Sobre')
    }
    return(
        <View>
            <Text>TELA DE HOME</Text>
            <Button 
                title="Ir para Sobre"
                onPress={navegaSobre}
            />
        </View>
    )
}