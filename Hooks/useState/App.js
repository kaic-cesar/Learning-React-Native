import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {

  // Declaração do useState
  const [nome, setNome] = useState('Kaic');
  const [idade, setIdade] = useState('0')

  function alteraNome(){
    setNome('Cesar')
  }

  return (
    <View style={styles.container}>
      <Text>{nome}</Text>
      
      <Button
        title='Alterar nome'
        onPress={alteraNome}
      />

      <Text>{idade}</Text>
      <TextInput 
        placeholder='Sua idade...'
        value={idade}
        onChangeText={(text) => setIdade(text)}
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
});
