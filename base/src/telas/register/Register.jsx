import React, { useState } from "react";
import { Image, SafeAreaView, View, Alert} from "react-native";
import { Input, Text,} from '@rneui/themed';
import { Button } from 'galio-framework';
import axios from 'axios';
import styles from "./Styles";

export default function Register ({navigation}) {
  const [mensagem, setMensagem] = useState('');
    const [formData, setFormData] = useState({
        id: '',
        nome: '',
        email: '',
        senha: '',
    });

    const handleInputChange = (name, value) => {
        setFormData({ ...formData, [name]: value });
    };

    //validar que os campos não são vazios
    const handleCadastrar = async () => {
      if (!formData.nome || !formData.email || !formData.senha) {
        Alert.alert('Todos os campos são obrigatórios!');
          return;
      }
      
      // Validação de email com regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        Alert.alert('Email inválido. Certifique-se de que está no formato correto!');
          return;
      }
  
        //envio de informações para a API cadastrar no banco de dados
        try {
            await axios.post('http://10.0.2.2:8085/api/registerUser', formData);
            Alert.alert('Cadastro realizado com sucesso');
            navigation.navigate("Login");
        } catch (error) {
            console.log(error)
            if (error.response.status === 401) {
              Alert.alert('O email ' + formData.email + ' já existe na base de dados')
            }
            else {
                console.log(error);
                Alert.alert('Ocorreu um erro ao cadastrar o usuário. Tente novamente!!!')
            }
        }
    };

  return (
    
      <SafeAreaView style={styles.container}>
      <View style={styles.fundo}>
        <View>
          <Text style={styles.tittle}>DIGITE O SEU NOME:</Text>
          <Input
            placeholder="Nome:"
            onChangeText={(text)=>
            handleInputChange('nome', text)}
            value={formData.nome} 
            color="white"           
            />
          <Text style={styles.tittle}>DIGITE O SEU EMAIL:</Text>
          <Input
            placeholder="Email:"
            onChangeText={(text)=>
            handleInputChange('email', text.toLowerCase() )}
            value={formData.email} 
            color="white"           
            /> 
          <Text style={styles.tittle}>DIGITE A SUA SENHA:</Text>
          <Input
            placeholder="Senha:"
            onChangeText={(text)=>
            handleInputChange('senha', text)}
            secureTextEntry
            value={formData.senha} 
            color="white"
                   
            /> 

          <View style={styles.botao}>

            <Button color='red' onPress={handleCadastrar} style={styles.buttonCont}>
               <Text style={styles.buttonText}>CADASTRAR</Text>
            </Button>
          </View>
          <View style={styles.containerImg}>
            <Image style={styles.imgLogo} source={require("../../../res/img/bravefit/logobravefit.png")} />
          </View>
        </View>
      </View>

      </SafeAreaView>
  );
}