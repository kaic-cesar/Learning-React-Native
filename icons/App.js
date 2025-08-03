import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// Utilizando o Feather Icons => https://feathericons.com/
import Feather from '@expo/vector-icons/Feather';


export default function App() {
  return (
    <View style={styles.container}>
      <Feather name='arrow-right' size={45} color='#000'/>
      <Feather name='check' size={62} color='#fe3333'/>
      <Feather name='database' size={25} color='#3f4323'/>
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
