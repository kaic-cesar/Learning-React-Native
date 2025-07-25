import React, { Component } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      input: '',
      nome: ''
    };
    this.gravaNome = this.gravaNome.bind(this);
  }

  // ComponentDidMout -> é executado quando o componente é montado em tela (quando a view é aberta)
  async componentDidMount() {
      await AsyncStorage.getItem('nome').then((value) => {
        this.setState({nome: value})
      })
  }

  // ComponentDidUpdate -> toda vez que um state é atualizado, ele faz algo
  async componentDidUpdate(_, prevState){
    // prevStae -> estado anterior

    const nome = this.state.nome;

    if(prevState != nome) {
      await AsyncStorage.setItem('nome', nome);
    }
  }

  gravaNome() {
    this.setState({
      nome: this.state.input
    });
    Keyboard.dismiss(); // Fecha o teclado 
  }



  render(){
    return(
      <SafeAreaView style={styles.area}>
        <View style={styles.viewInput}>
          <TextInput 
            style={styles.input}
            value={this.state.input}
            onChangeText={(text) => this.setState({input: text})}
            underlineColorAndroid='transparent'
          />

          <TouchableOpacity onPress={this.gravaNome}>
            <Text style={styles.btn}>+</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.nome}>{this.state.nome}</Text>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  area:{
    flex: 1,
    alignItems: 'center',
  },
  viewInput:{
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20
  },
  input:{
    width: 350,
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
  },
  btn:{
    backgroundColor: '#222',
    color: '#fff',
    height: 40,
    padding: 10,
    marginLeft: 4
  },
  nome:{
    fontSize: 30,
    textAlign: 'center',
    marginTop: 15
  }
});

export default App;