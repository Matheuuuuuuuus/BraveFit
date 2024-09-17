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
          text: 'OMBRO',
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
        <Text style={styles.titleCard}>Confira os melhores exercícos para os seus Ombros:</Text>
        </View>
        <Text style={styles.title}>1- Elevação Lateral</Text>
                  <Image source={require("../../../res/img/bravefit/Ombro/elevacao-lateral.jpg")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.description}>A elevação lateral é um dos melhores exercícios para exercitar os ombros, sendo indicado quando se deseja o seu fortalecimento e hipertrofia e para melhorar a mobilidade e estabilidade da articulação
                </Text>
                </View>
        <Text style={styles.title}>2- Elevação frontal</Text>
                  <Image source={require("../../../res/img/bravefit/Ombro/frontal.jpg")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.description}>Elevação frontal é um exercício de força que serve para fortalecer e aumentar a massa muscular do músculo deltoide anterior no ombro de forma isolada, além de deixar os ombros mais definidos.
                </Text>
                </View>
        <Text style={styles.title}>3- Desenvolvimento com halteres</Text>
                <Image source={require("../../../res/img/bravefit/Ombro/desenvolvimento.jpg")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.description}>O Desenvolvimento com Halteres é um potente exercício multiarticular que atua na região superior do nosso corpo. Por ser um exercício multiarticular, tem grande aplicabilidade tanto para a hipertrofia, emagrecimento e performance.
                </Text>
                </View>
          <Text style={styles.title}>4- Desenvolvimento maquina</Text>
                <Image source={require("../../../res/img/bravefit/Ombro/Desenvolvimento-maquina.jpg")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.description}>Desenvolvimento Máquina Trata-se de um exercício para fortalecer os ombros. Mas o movimento não recruta somente o deltoide e é eficiente para trabalhar vários músculos da parte superior do corpo Como tríceps, peitoral e a parte superior das costas.
                </Text>
                </View>
                <Text style={styles.title}>5- Crucifixo inverso</Text>
                <Image source={require("../../../res/img/bravefit/Ombro/crucifixo-inverso.jpg")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.description}>O crucifixo inverso, ou invertido, é um exercício presente nos treinos de superiores com foco na hipertrofia dos ombros. 
                </Text>
                </View>
                <Text style={styles.title}>6- Elevação unilateral</Text>
                <Image source={require("../../../res/img/bravefit/Ombro/unilateral.jpg")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.description}>A elevação lateral unilateral é uma variação da elevação lateral simples em que se exercita um braço de cada vez, podendo ser feita de diferentes maneiras, como usando halteres, elásticos ou polias.
                  </Text>
                </View>
                </View>
                
                
      </ScrollView>
    </SafeAreaView>
  );
}
