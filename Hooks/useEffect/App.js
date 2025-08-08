import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function App() {

  const [nome, setNome] = useState('Apple');

  useEffect(() => {
    async function getStorage(){
      const nomeStorage = await AsyncStorage.getItem('nomes');
      if(nomeStorage !== null) {
        setNome(nomeStorage)
      }
    }

    getStorage()
  },[])

  useEffect(() => {
    async function saveStorage() {
      await AsyncStorage.setItem('nomes', nome);
    }

    saveStorage(); // Chama a função

  },[nome])

  // () -> é o parâmetro é a função a ser executada
  // [] -> um array que podemos passar uma state que ficará sendo monitorada e quando tiver alteração, a função é executada.

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{nome}</Text>
      
      <Button 
        title='Mudar nome'
        onPress={() => setNome('Youtube')}
      />
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
  title:{
    marginBottom: 30,
    fontSize: 35
  }
});
