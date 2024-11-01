import React, { useState } from "react";
import { Image, SafeAreaView, View, Alert} from "react-native";
import { Input, Text,} from '@rneui/themed';
import { Button } from 'galio-framework';
import styles from "./Styles";
import axios from 'axios';

const Login = ({navigation}) =>{
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async () => {
      try{
          //Verificar se os campos foram preenchidos
          if(!email || !senha){
              Alert.alert('Erro', 'Por favor, preencha todos os campos!');
              return
          }

          //Objeto para enviar para a API 
          const data = {
              email:email,
              senha:senha
          }

          //Enviar os dados para a API
          const response = await axios.post('http://10.0.2.2:8085/api/validate', data);

          //Verificar se o login foi efetuado com sucesso
          if(response.status === 200){
            const userData = {
              id:response.data.id,
              nome:response.data.nome,
              email:response.data.email,
            }
              setEmail('');
              setSenha('');
              navigation.navigate('Inicio', {userData});

          }
          else{
              Alert.alert('Erro', 'Email ou senha incorretos por favor tente novamente')
          }
      }
      catch(error){
          if(error.response && error.status === 401){
             
              Alert.alert('Erro', 'Ocorreu um erro ao fazer o login, por favor, tente novamente')
          }
          else{
              console.log(error)
              Alert.alert('Erro', 'Email ou senha incorretos. Por favor tente novamente')
          }
      }
  };

  return (
    
      <SafeAreaView style={styles.container}>
      <View style={styles.fundo}>
        <View>
          <Text h4 style={styles.tittle}>Digite o seu email:</Text>
          <Input
            placeholder='Email:'
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            color="white"
          />
          <Text h4 style={styles.tittle}>Digite a sua senha:</Text>
          <Input
            placeholder='Senha:'
            value={senha}
            onChangeText={setSenha}
            secureTextEntry
            color="white"
          />

          <View style={styles.botao}>
            {/* colocar a fonte em negrito */}
            <Button title='ENTRAR' style={styles.buttonReg} onPress={() => 
              navigation.navigate('Register')}>
                <Text style={styles.buttonText}>CADASTRAR</Text>
            </Button>
           
            <Button title="Entrar" color='red' onPress={handleLogin} style={styles.buttonCont}>
            <Text style={styles.buttonText}>ENTRAR</Text>
            </Button>
          </View>
          <Text style={styles.remember} onPress={() => navigation.navigate('Atualizar')}>Esqueceu a senha?</Text>
          <View style={styles.containerImg}>
            <Image style={styles.imgLogo} source={require("../../../res/img/bravefit/logobravefit.png")} />
          </View>
          

        </View>
      </View>
      </SafeAreaView>
  );
}

export default Login;