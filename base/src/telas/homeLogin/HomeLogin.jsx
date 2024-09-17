import React from "react";
import { Image, SafeAreaView, Text, View, StyleSheet } from "react-native";
import { Button } from 'galio-framework';
import styles from "./Styles";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContent}>
        <Image
          source={require("../../../res/img/bravefit/logobravefit.png")}
          style={styles.imageLogo}
        />
        <View style={styles.textContainer}>
          <Text style={styles.textLogo}>BRAVEFIT</Text>
          <Text style={styles.descriptionLogo}>"Seu guia para a força e sucesso"</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button style={styles.button} onPress={() => navigation.navigate('Login')}>ENTRAR</Button>
        <Text style={styles.text} onPress={() => navigation.navigate('Register')}>Cadastrar-se</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
