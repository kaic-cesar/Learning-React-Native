import React, { useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Animated, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';


// Criando um componente para animação
const ButtonAnimated = Animatable.createAnimatableComponent(TouchableOpacity);


export default function App() {

  const btnRef = useRef(null)

  function handleClick(){
    btnRef.current.shake() // Aplicar o efeito 
  }

  return (
    <View style={styles.container}>
      <Animatable.Text 
      style={styles.title}
        animation="pulse"
        iterationCount={'infinite'}
        duration={200}
      >
        Coração acelerado
      </Animatable.Text>

      <Animatable.Text 
      style={styles.title}
        animation="pulse"
        iterationCount={'infinite'}
        duration={1000}
      >
        Coração normal
      </Animatable.Text>

      <ButtonAnimated 
        style={styles.btn}
        animation="slideInDown"
        duration={1000}
        ref={btnRef}
        onPress={handleClick}
      >
        <Text style={{color: '#fff', fontSize: 20}}>Animar</Text>
      </ButtonAnimated>

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
    fontSize: 25
  },
  btn:{
    width: '70%',
    height: 50,
    backgroundColor: '#121212',
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
