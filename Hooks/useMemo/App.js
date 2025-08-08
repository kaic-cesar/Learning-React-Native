import React, { useMemo, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  // Estado que armazena o nome de uma linguagem
  const [lang, setLang] = useState('Javascript');

  // Maneira simples: calcular o tamanho da string diretamente
  // const letters = lang.length;
  // Porém, sem otimização, esse cálculo será refeito a cada renderização,
  // mesmo que 'lang' não tenha mudado. Isso pode ser irrelevante para cálculos simples,
  // mas em operações custosas impacta a performance.

  // Usando useMemo:
  // - Memoriza o resultado do cálculo.
  // - Só recalcula quando o valor de 'lang' mudar (dependência declarada no array).
  const letters = useMemo(() => {
    lang.length
  }, [lang]);

  return (
    <View style={styles.container}>
      <Text>{lang}</Text>
      <Text>{letters}</Text>
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
