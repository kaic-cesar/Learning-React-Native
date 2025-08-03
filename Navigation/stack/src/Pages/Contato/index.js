import React from "react";
import {View, Text, Button} from 'react-native'
import { useNavigation, StackActions } from '@react-navigation/native' // Importando o meio de navegação

export default function Contato(){
    const navigation = useNavigation();


    function handleHome() {
        navigation.dispatch(StackActions.popToTop()); // popToTop -> retorna para o primeiro item da pilha
    }

    return(
        <View>
            <Text>TELA DE CONTATO</Text>
            
            <Button 
                title="Voltar tela"
                onPress={() => navigation.goBack()}
            />

            <Button 
                title="Voltar a HOME"
                onPress={handleHome}
            />
        </View>
    )
}