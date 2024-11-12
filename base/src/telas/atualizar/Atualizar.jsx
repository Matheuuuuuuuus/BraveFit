import React, { useState } from 'react';
import { View, Text, TextInput, Alert, Image } from 'react-native';
import axios from 'axios';
import { Button } from 'galio-framework';
import styles from './Styles';

export default function Home({navigation}) {
    const [email, setEmail] = useState('');
    const [novaSenha, setNovaSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [mostrarFormulario, setMostrarFormulario] = useState('');

    const handleResetSenha = async () => {
        try {
            // Verificar se o email está preenchido
            if (!email) {
                Alert.alert("Por favor, insira seu email.");
            }

            const data = {
                email: email
            }

            // Verificar se o email existe no banco de dados
            const response = await axios.post('http://10.0.2.2:8085/api/reset', data);

            if (response.status === 200) {
                // Exibir o formulário para trocar a senha
                setMostrarFormulario(true);
            } 
            else if (response.status === 401) {
                Alert.alert("Email não encontrado. Por favor, verifique o email digitado.");
            }
        } catch (error) {
            if (error.response && error.response.status === 401) {
                Alert.alert('Email não encontrado. Por favor, verifique o email digitado');
            }
            else {
                Alert.alert('Erro ao resetar a senha:', error.message);
            }
        }
    };

    const handleTrocarSenha = async () => {
        try {
            // Verificar se as senhas coincidem
            if (novaSenha !== confirmarSenha) {
                Alert.alert('As senhas não coincidem.');
                return;
            }
            const data = {
                email: email,
                senha: novaSenha
            }

            // Fazer a solicitação para trocar a senha
            const response = await axios.put('http://10.0.2.2:8085/api/resetpassword', data);

            if (response.status === 200) {
                navigation.navigate("Login");
                Alert.alert('Senha trocada com sucesso.');
            } else {
                Alert.alert('Erro ao trocar a senha.');
            }
        } catch (error) {
            Alert.alert('Erro ao trocar a senha:', error.message);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Esqueceu sua senha?</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite seu email"
                
                value={email}
                onChangeText={setEmail}
            />
            {!mostrarFormulario && (
                <Button style={styles.buttonCont} title="Resetar Senha" onPress={handleResetSenha}>
                    Alterar senha
                </Button>
            )}
            {mostrarFormulario && (
                <>
                    <TextInput
                        style={styles.input}
                        placeholder="Nova Senha"
                        color="white"
                        value={novaSenha}
                        onChangeText={setNovaSenha}
                        secureTextEntry
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Confirmar Senha"
                        value={confirmarSenha}
                        onChangeText={setConfirmarSenha}
                        secureTextEntry
                    />
                    <Button style={styles.buttonCont} onPress={handleTrocarSenha}>
                        <Text style={styles.buttonText}>Cadastrar</Text>
                    </Button>
                </>
            )}
            <View style={styles.containerImg}>
            <Image style={styles.imgLogo} source={require("../../../res/img/bravefit/logobravefit.png")} />
          </View>
        </View>
        

    );
};


