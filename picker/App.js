import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native'; 
import { Picker } from '@react-native-picker/picker';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pizza: 0,
      pizzas: [
        { key: 1, nome: 'Quatro queijos', valor: 54.90 },
        { key: 2, nome: 'Calabresa', valor: 59.90 },
        { key: 3, nome: 'Mussarela', valor: 49.90 },
        { key: 4, nome: 'Brigadeiro', valor: 29.90 },
      ]
    };
  };

  render() {

    let pizzasItem = this.state.pizzas.map((v, k) => {
      return <Picker.Item key={k} value={k} label={v.nome}/>
    })

    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Menu pizza</Text>

      <Picker 
        selectedValue={this.state.pizza} // Define a value for selectedValue
        onValueChange={ (itemValue, itemIndex) => this.setState({pizza: itemValue})} // Define a function for onValueChange
        >
        {pizzasItem}
      </Picker>

        <Text style={styles.pizzas}>Voce escolheu: Pizza {this.state.pizzas[this.state.pizza].nome}</Text>
        <Text style={styles.pizzas}>R$: {this.state.pizzas[this.state.pizza].valor.toFixed(2)}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {    
    flex: 1,
    marginTop: 120,
  },
  logo:{
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
  }, 
  pizzas:{
    marginTop: 15,
    fontSize: 24,
    textAlign: 'center',
  }
});

export default App; 