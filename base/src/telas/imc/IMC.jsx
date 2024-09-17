import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from './Style'; 

export default function CalcularIMC() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularIMC = () => {
    if (altura && peso !== 0) {
      const IMC = Math.round(peso / (altura * altura), 2);

      let categoria = '';
      if (IMC < 18.5) {
        categoria = 'Abaixo do peso';
      } else if (IMC >= 18.5 && IMC < 25) {
        categoria = 'Peso normal';
      } else if (IMC >= 25 && IMC < 30) {
        categoria = 'Sobrepeso';
      } else if (IMC >= 30 && IMC < 40) {
        categoria = 'Obesidade Grau I';
      } else {
        categoria = 'Obesidade Grau II e III';
      }

      setResultado(`Seu IMC é ${IMC}. Você está na categoria: ${categoria}`);
    } else {
      setResultado('Insira altura e peso.');
    }
  };

  const limparCampos = () => {
    setPeso('');
    setAltura('');
    setResultado('');
  };

  return (
    
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de IMC</Text>
      <TextInput
        keyboardType='numeric'
        value={altura}
        onChangeText={setAltura}
        placeholder="Altura (m)"
        style={styles.input}
      />
      <TextInput
        keyboardType='numeric'
        value={peso}
        onChangeText={setPeso}
        placeholder="Peso (kg)"
        style={styles.input}
      />
      <Button title="Calcular" color='#89B1ED' onPress={calcularIMC} style={styles.button} />
      <Button title="Limpar" color='#89B1ED' onPress={limparCampos} style={styles.button} />
      <Text style={styles.result}>{resultado}</Text>
    </View>
  );
}