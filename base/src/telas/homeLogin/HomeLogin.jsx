import React from "react"; // Importa o React para poder usar componentes
import { Image, SafeAreaView, Text, View, StyleSheet } from "react-native"; // Importa componentes do React Native
import { Button } from 'galio-framework'; // Importa o componente Button do Galio Framework
import styles from "./Styles"; // Importa estilos definidos em outro arquivo

// Componente funcional HomeScreen que recebe a propriedade `navigation`
const HomeScreen = ({ navigation }) => {
  return (
    // SafeAreaView garante que o conteúdo não fique coberto por áreas como a barra de status
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContent}>
        {/* Imagem do logotipo da BraveFit */}
        <Image
          source={require("../../../res/img/bravefit/logobravefit.png")}
          style={styles.imageLogo} // Aplica estilos à imagem
        />
        <View style={styles.textContainer}>
          {/* Nome do aplicativo */}
          <Text style={styles.textLogo}>BRAVEFIT</Text>
          {/* Descrição do aplicativo */}
          <Text style={styles.descriptionLogo}>"Seu guia para a força e sucesso"</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        {/* Botão que navega para a tela de login quando pressionado */}
        <Button style={styles.button} onPress={() => navigation.navigate('Login')}>ENTRAR</Button>
        {/* Texto que navega para a tela de registro quando pressionado */}
        <Text style={styles.text} onPress={() => navigation.navigate('Register')}>Cadastrar-se</Text>
      </View>
    </SafeAreaView>
  );
};

// Exporta o componente HomeScreen para ser utilizado em outros lugares
export default HomeScreen;