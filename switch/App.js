import React, { Component } from 'react';
import { 
  StyleSheet,
  View,
  Text,
  Switch
 } from 'react-native';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false
    };
  } 
  render(){
    return(
      <View style={styles.container}>
        <Switch
          value={this.state.status} 
          onValueChange={(valorSwitch) => this.setState({status: valorSwitch})}
          />
        <Text style={{fontSize: 20, marginTop: 10}}>{(this.state.status) ? "Ativo" : "Inativo" }</Text>
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