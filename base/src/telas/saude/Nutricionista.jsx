import React, { useState } from 'react';
import { View, TextInput, Alert, SafeAreaView, Image, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Text, Header } from '@rneui/themed';
import { Button } from 'galio-framework';
import axios from 'axios';
import styles from './Style';

export default function CadastrarReceitas({ navigation, route }) {
  const [nome, setNome] = useState('');
  const [ingredientes, setIngredientes] = useState('');
  const [modoPreparo, setModoPreparo] = useState('');
  const [imageUri, setImageUri] = useState('');

  const handleSubmit = async () => {
    // Verificar se todos os campos estão preenchidos
    if (!nome || !ingredientes || !modoPreparo) {
      Alert.alert('Campos obrigatórios', 'Por favor, preencha todos os campos.');
      return;
    }

    try {
      const response = await axios.post('http://10.0.2.2:8085/api/cadastrarReceitas', {
        nome,
        ingredientes,
        modo_preparo: modoPreparo
      });
      
      if (response.status === 201) {
        Alert.alert('Sucesso', 'Receita cadastrada com sucesso!');
        setNome('');
        setIngredientes('');
        setModoPreparo('');
      }
    } catch (error) {
      Alert.alert('Erro', 'Erro ao cadastrar a receita.');
    }
  };

  // const handleImagePick = () => {
  //   const options = {
  //     title: 'Selecione uma imagem',
  //     storageOptions: {
  //       skipBackup: true,
  //       path: 'images',
  //     },
  //   };

  //   ImagePicker.showImagePicker(options, (response) => {
  //     if (response.didCancel) {
  //       console.log('Usuário cancelou a seleção de imagem');
  //     } else if (response.error) {
  //       console.log('Erro ao selecionar a imagem: ', response.error);
  //     } else {
  //       setImageUri(response.uri);
  //     }
  //   });
  // };

  // const uploadImage = async () => {
  //   if (!imageUri) {
  //     Alert.alert('Erro', 'Nenhuma imagem selecionada.');
  //     return;
  //   }

  //   const form = new FormData();
  //   form.append('text', 'description');
  //   const imageCover = {
  //     name: 'image.jpg',
  //     uri: imageUri,
  //     type: 'image/jpeg',
  //   };

  //   form.append('imageCover', imageCover);

  //   try {
  //     const response = await axios.post('http://10.0.2.2:8085/api/uploadImage', form, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //       },
  //     });

  //     if (response.status === 200) {
  //       Alert.alert('Sucesso', 'Imagem enviada com sucesso!');
  //       navigation.navigate('AppTabNavigator', { screen: 'HomePage' });
  //     }
  //   } catch (error) {
  //     Alert.alert('Erro', 'Erro ao enviar a imagem.');
  //   }
  // };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        backgroundColor="#FFA92C"
        barStyle="light-content"
        leftComponent={
          <View style={styles.headerComponentContainer}>
            <Image source={require('../../../res/img/bravefit/nutricionista/nutricionista.jpg')} style={{ width: 90, height: 50 }} />
          </View>
        }
        rightComponent={(
          <View style={styles.headerIconsContainer}>
            <Icon
              name="search"
              size={30}
              color="#fff"
              style={styles.headerIcon}
            />
            <Icon
              name="person"
              size={30}
              color="#fff"
              style={styles.headerIcon}
            />
          </View>
        )}
      />
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
          style={styles.input}
          placeholder="Nome:"
          placeholderTextColor={'#FFA92C'}
          value={nome}
          onChangeText={setNome}
        />
        <TextInput
          style={styles.input}
          placeholder="Ingredientes:"
          placeholderTextColor={'#FFA92C'}
          value={ingredientes}
          onChangeText={setIngredientes}
        />
        <TextInput
          style={styles.input}
          placeholder="Modo de Preparo:"
          placeholderTextColor={'#FFA92C'}
          value={modoPreparo}
          onChangeText={setModoPreparo}
        />
        <View style={styles.buttonContainer}>
          {/* <Button title="Selecionar Imagem" onPress={handleImagePick} /> */}
        <Button
          onlyText
          color='red'
          onPress={handleSubmit}
          style={styles.receitaButton}
          >
          <Text style={styles.buttonText}>CADASTRAR RECEITA</Text>
        </Button>
        {/* <Button title="Enviar Imagem" onPress={uploadImage} /> */}
        </View>
        
      </View>
    </SafeAreaView>
  );
}




