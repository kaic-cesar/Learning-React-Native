import React, { Component } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Button,
  Modal
} from 'react-native';
import Entrar from './src/entrar.js'


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      modalVisible: false
    };

    this.abrir = this.abrir.bind(this);
    this.fechar = this.fechar.bind(this);
  }

  abrir(){
    this.setState({modalVisible: true})
  }

  fechar(visible){
    this.setState({modalVisible: visible})
  }

  render(){
    return(
      <SafeAreaView style={styles.area}>
        <View>
          <Button 
            title='Abrir' 
            onPress={this.abrir}
            style={styles.btn}
          />

        {/* animationType:
        slide -> de baixo para cima
        fase -> aparece na tela */}

          <Modal animationType='slide' visible={this.state.modalVisible}>
            <View style={{margin: 15, flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Entrar fechar={() => this.fechar(false)}/>
            </View>
          </Modal>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  area:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default App;