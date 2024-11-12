import React, { useState } from 'react';
import { View, TextInput, Alert, SafeAreaView, Image, ImageBackground, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Text, Header } from '@rneui/themed';
import { Button } from 'galio-framework';
import axios from 'axios';
import styles from './Style';

export default function CadastrarFicha({ navigation, route }) {
  const id_usuario = route.params.obj.id
  console.log(id_usuario)
  const [peso, setPeso] = useState('');
  const [suplementacao, setsuplementacao] = useState('');
  const [nutricionista, setnutricionista] = useState('');
  const [objetivo, setobjetivo] = useState('');

  const handleSubmit = async () => {
    // Verificar se todos os campos estão preenchidos
    if (!peso || !suplementacao || !nutricionista || !objetivo) {
      Alert.alert('Campos obrigatórios', 'Por favor, preencha todos os campos.');
      return;
    }

    try {
      const data = {
        ID:'',
        peso: peso,
        suplementacao: suplementacao,
        nutricionista: nutricionista,
        objetivo: objetivo,
        id_usuario: id_usuario,
      }
      console.log(data)
      const response = await axios.post('http://10.0.2.2:8085/api/cadastrarFicha', data);
      
      if (response.status === 201) {
        Alert.alert('Sucesso', 'Ficha cadastrada com sucesso!');
        setPeso('');
        setsuplementacao('');
        setnutricionista('');
        setobjetivo('');
      }
    } catch (error) {
      console.log(error)
      Alert.alert('Erro', 'Erro ao cadastrar a Ficha.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        backgroundColor="#27438C"
        barStyle="light-content"
        centerComponent={{
          text: ' SUA FICHA',
          style: { color: "#fff", fontSize: 20, fontWeight: "bold" },
        }}
        leftComponent={{
          icon: 'arrow-back',
          color: '#fff',
          onPress: () => navigation.goBack(),
        }}
      />
      <ScrollView>
      <View style={styles.section}>
        <View style={styles.newsCard}>
          <ImageBackground
            source={require("../../../res/img/bravefit/nutricionista/nutricionista.jpg")}
            style={styles.newsImage}
          >
          </ImageBackground>
        </View>
      </View>
      
      <View style={styles.cadastroContainer}>
        <TextInput
          keyboardType='numeric'
          style={styles.input}
          placeholder="Peso:"
          placeholderTextColor={'#fff'}
          value={peso}
          onChangeText={setPeso}
        />
        <TextInput
          style={styles.input}
          placeholder="Suplementação:"
          placeholderTextColor={'#fff'}
          value={suplementacao}
          onChangeText={setsuplementacao}
        />
        <TextInput
          style={styles.input}
          placeholder="nutricionista:"
          placeholderTextColor={'#fff'}
          value={nutricionista}
          onChangeText={setnutricionista}
        />
        <TextInput
          style={styles.input}
          placeholder="Objetivo"
          placeholderTextColor={'#fff'}
          value={objetivo}
          onChangeText={setobjetivo}
        />
        <View style={styles.buttonContainer}>
          {/* <Button title="Selecionar Imagem" onPress={handleImagePick} /> */}
        <Button
          onlyText
          color='red'
          onPress={handleSubmit}
          style={styles.receitaButton}
          >
          <Text style={styles.buttonText}>CADASTRAR FICHA</Text>
        </Button>
        {/* <Button title="Enviar Imagem" onPress={uploadImage} /> */}
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}




