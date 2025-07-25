import React, { Component } from "react";
import {
    Text,
    View,
    StyleSheet
} from "react-native";

class Pessoa extends Component {
  render() {
    return (
      <View style={styles.areaPessoa}>
        <Text style={styles.textoPessoa}>Nome: {this.props.data.item.nome}</Text>
        <Text style={styles.textoPessoa}>Idade: {this.props.data.item.idade}</Text>
        <Text style={styles.textoPessoa}>Email: {this.props.data.item.email}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  areaPessoa:{
    backgroundColor: '#222',
    height: 200,
    marginBottom: 15,
  },
  textoPessoa: {
    color: '#FFF',
    fontSize: 20,
    marginLeft: 10,
    marginTop: 10
  }
});


export default Pessoa;