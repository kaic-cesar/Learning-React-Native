import React, { Component } from 'react';
import { 
  StyleSheet,
  View,
  Text
 } from 'react-native';
 import Slider from '@react-native-community/slider';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valor: 50
    };
  } 
  render(){
    return(
      <View style={styles.container}>
        <Slider 
          minimumValue={0}
          maximumValue={100}
          onValueChange={(valorSelecionado) => this.setState({valor: valorSelecionado})} // Atualiza o estado com o valor selecionado
          value={this.state.valor} // Valor inicial do slider
          minimumTrackTintColor='#00ff00' // Cor da parte preenchida do slider
          maximumTrackTintColor='#ff0000' // Cor da parte não preenchida do slider
        />

        <Text>Idade: {this.state.valor.toFixed(0)}</Text>
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({  
  container:{
    flex:1,
    marginTop: 100,
    marginInline: 40
  }
});