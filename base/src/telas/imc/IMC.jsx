import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Button } from "galio-framework";
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
        placeholderTextColor={'#fff'}
        color="#fff"
        style={styles.input}
      />
      <TextInput
        keyboardType='numeric'
        value={peso}
        onChangeText={setPeso}
        placeholder="Peso (kg)"
        placeholderTextColor={'#fff'}
        color="#fff"
        style={styles.input}
      />
      <Button onPress={calcularIMC} style={styles.button}>Calcular</Button>      
      <Button onPress={limparCampos} style={styles.button}>Limpar</Button>
      <Text style={styles.result}>{resultado}</Text>
    </View>
  );
}