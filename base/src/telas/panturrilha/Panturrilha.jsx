import React from "react";
import { View, SafeAreaView, ScrollView, Image } from 'react-native';
import { Text, Header } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import styles from "./Style";

export default function Home() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.scrollview}>
      <Header
        backgroundColor="#27438C"
        barStyle="light-content"
        centerComponent={{
          text: 'PANTURRILHA',
          style: { color: "#fff", fontSize: 20, fontWeight: "bold" },
        }}
        leftComponent={{
          icon: 'arrow-back',
          color: '#fff',
          onPress: () => navigation.goBack(),
        }}
      />
      <ScrollView>

      <View style={styles.card}>
      <View style={styles.content}>
        <Text style={styles.titleCard}>Confira os melhores exercícos para as suas Panturrilhas:</Text>
        </View>
        <Text style={styles.title}>1- Panturrilha em pé</Text>
                  <Image source={require("../../../res/img/bravefit/panturrilha/panturrilha-pe.jpg")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.description}>Panturrilha em pé é um exercício que consiste em ficar de ponta de pé, apoiando-se em uma parede ou banco, e depois retornar à posição inicial.
                </Text>
                </View>
        <Text style={styles.title}>2- Panturrilha no step</Text>
                  <Image source={require("../../../res/img/bravefit/panturrilha/step.jpg")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.description}>Este exercício é uma variação do clássico exercício de levantamento de panturrilha, mas que é feito com maior intensidade para desenvolver uma panturrilha com maior volume e mais força, havendo o trabalho principalmente do músculo gastrocnêmio
                </Text>
                </View>
        <Text style={styles.title}>3- Panturrilha sentada</Text>
                <Image source={require("../../../res/img/bravefit/panturrilha/panturrilhasentado.jpg")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.description}> Panturrilha sentado é um exercício de musculação que pode ser feito em uma cadeira ou banco, ou com um equipamento próprio para a região das panturrilhas.
                  </Text>
                </View>
                </View>
                
                
      </ScrollView>
    </SafeAreaView>
  );
}
