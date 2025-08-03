import React, { useLayoutEffect } from "react";
import {View, Text, StyleSheet, Button} from 'react-native';

import { useRoute, useNavigation } from '@react-navigation/native';

export default function Sobre(){
    const route = useRoute();
    const navigation = useNavigation();

    useLayoutEffect(() => { // é sincrono, só monta a interface após concluir 
        navigation.setOptions({
            title:  route.params?.nome === '' ? 'Pagina sobre' : route.params?.nome
        })
    }, [navigation])

    return(
        <View style={styles.container}>
            <Text>SOBRE</Text>
            <Text>{route.params?.nome}</Text>
            <Text>{route.params?.email}</Text>

            
            <Button 
                title="Contato"
                onPress={() => navigation.navigate('Contato')} 
            />

            <Button 
                title="Voltar tela"
                onPress={() => navigation.goBack()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})