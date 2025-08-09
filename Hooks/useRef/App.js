// importando o useRef 
import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {

  const [name, setName] = useState('')
  
  // Criamos uma variável que será a referência 
  const nameInput = useRef(null)

  function novoNome(){
    // Dentro da função, passamos um parâmetro para a referência
    // Nesse caso estamos apenas passando um foco no input ao ser clicado no botão
    nameInput.current.focus();
  }

  return (
    <View style={styles.container}>
      <TextInput 
        placeholder='Digite aqui...'
        value={name}
        onChangeText={(text) => setName(text)}
        ref={nameInput} // passamos a referencia no componente
      />

      <Button 
        title='Clique aqui'
        onPress={novoNome}
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
