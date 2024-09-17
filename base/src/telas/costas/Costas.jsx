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
          text: 'COSTAS',
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
        <Text style={styles.titleCard}>Confira os melhores exercícos para as costas:</Text>
        </View>
        <Text style={styles.title}>1- Barra fixa</Text>
                  <Image source={require("../../../res/img/bravefit/Costas/barra-fixa.jpg")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.description}>Se você quer fortalecer costas, braços e ombros, o treino na barra fixa é um dos mais indicados por ser bastante completo. Uma das vantagens desse aparelho é que existem versões para instalação simples na porta de casa, ou seja, nem é preciso ir à academia para fazer seu treino. 
                </Text>
                </View>
        <Text style={styles.title}>2- Puxada aberta</Text>
                  <Image source={require("../../../res/img/bravefit/Costas/puxada-aberta.jpg")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.description}>A puxada frontal aberta, ou pronada, é um exercício feito na polia e com o uso de uma barra reta. Esse tipo de puxada frontal trabalha o grande dorsal, o trapézio e os romboides, que são músculos localizados nas costas. Além disso, a puxada frontal aberta também trabalha o músculo do bíceps braquial.
                </Text>
                </View>
        <Text style={styles.title}>3- Puxada pela frente com o triângulo</Text>
                <Image source={require("../../../res/img/bravefit/Costas/triangulo.jpg")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.description}> A puxada no pulley com o triângulo é um exercício muito bom para as costas. Chamado também de puxada alta com o triângulo, o exercício ativa o meio das costas (ou latíssimo do dorso). Além dele, o bíceps também trabalha para puxar o acessório.
                </Text>
                </View>
         <Text style={styles.title}>4- Remada unilateral com halter (remada serrote)</Text>
                <Image source={require("../../../res/img/bravefit/Costas/serrote.jpg")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.description}>Entre as várias opções de exercícios para fortalecer os músculos das costas, a remada unilateral com halter (ou remada serrote) é uma opção bastante eficaz para quem quer deixar a região mais forte. De quebra, como grande parte dos movimentos para trabalhar a dorsal, o movimento ainda desenvolve os bíceps, os ombros e os antebraços.
                </Text>
                </View>
         <Text style={styles.title}>5- Remada curvada com barra e pegada pronada</Text>
                <Image source={require("../../../res/img/bravefit/Costas/remadapronada.jpg")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.description}>A remada curvada serve para o desenvolvimento muscular harmônico e é um dos poucos exercícios de costas que utiliza o peso livre. Devido à posição curvada, o movimento ativa o dorso, trapézio (porção média e inferior), romboides, deltoide, bíceps braquial, serrátil, entre outros músculos.
                </Text>
                </View>
                <Text style={styles.title}>6- Remada cavalinho</Text>
                <Image source={require("../../../res/img/bravefit/Costas/cavalinho.jpg")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.description}>O exercício na remada cavalinho consiste em você estabelecer o apoio da região peitoral no suporte do aparelho e realizar a flexão dos cotovelos ao deslocar a barra com o peso na direção do tronco,onde deve sempre se atentar em manter os braços mais perto do corpo e sempre realizar a contração dos músculos das costas.
                </Text>
                </View>
                <Text style={styles.title}>7- Remada baixa triângulo</Text>
                <Image source={require("../../../res/img/bravefit/Costas/remada-tringulo.jpg")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.description}>Remada baixa é considerado um dos melhores exercícios para trabalhar costas. Quando se faz remada baixa, a pessoa trabalha diversos músculos, mas principalmente o latíssimo do dorso e o trapézio, nas porções inferior e superior.
                </Text>
                </View>
                <Text style={styles.title}>8- PullDown</Text>
                <Image source={require("../../../res/img/bravefit/Costas/pull-down.png")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.description}>O pulldown é um exercício popular na musculação que visa principalmente trabalhar os músculos das costas e dos ombros.
                </Text>
                </View>
                <Text style={styles.title}>9- Voador dorsal</Text>
                <Image source={require("../../../res/img/bravefit/Costas/voadardorsal.jpg")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.description}>O voador inverso (também conhecido como voador invertido) é um exercício que trabalha os músculos dos ombros (deltoides superiores) e das costas (romboides e trapézios). Estudos tem apontado que esse fortalecimento diminui e até elimina, em alguns casos, a dor lombar crônica nos pacientes observados.
                </Text>
                </View>
                </View>
      </ScrollView>
    </SafeAreaView>
  );
}
