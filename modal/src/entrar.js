import React, { Component } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Button,
} from 'react-native';


export default class Entrar extends Component {

  render(){
    return(
        <View style={{width: '100%', height: 250, padding: 20, backgroundColor: '#222', flexDirection: 'row', justifyContent: 'space-between', borderRadius: 11, paddingTop: 20}}>
            <Text style={{color: '#fff', fontSize: 26}}>Seja bem vindo ao Modal!</Text>
            <Button
                title='X'
                onPress={this.props.fechar}
                />
        </View>
    )
  }
}

