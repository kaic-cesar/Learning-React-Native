import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  FlatList
} from 'react-native';

import Pessoa from './src/Pessoas'; // Importando o componente Pessoa

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed:[
        {id: '1', nome: 'Kaic', idade: 23, email: 'kaic@kaic.com'},
        {id: '2',nome: 'Joao', idade: 43, email: 'joao@joao.com'},
        {id: '3',nome: 'Henrique', idade: 13, email: 'henrique@henrique.com'},
        {id: '4',nome: 'Paulo', idade: 56, email: 'paulo@paulo.com'},
        {id: '5',nome: 'Gabriela', idade: 24, email: 'gabriela@gabriela.com'},
        {id: '6',nome: 'Juan', idade: 12, email: 'juan@juan.com'}
      ]
    };
  }

  render(){
    return(
      <SafeAreaView style={StyleSheet.container}>
        <FlatList
          data={this.state.feed} // Lista que irá receber
          keyExtractor={(item) =>item.id} // Chave única para cada item
          renderItem={ (item) => <Pessoa data={item}/> } // Função que renderiza cada item da lista
          />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
}); 

export default App;

