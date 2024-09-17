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
          text: 'POSTERIOR',
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
        <Text style={styles.titleCard}>Confira os melhores exercícos para o seu posterior:</Text>
        </View>
        <Text style={styles.title}>1- Stiff</Text>
                  <Image source={require("../../../res/img/bravefit/Posterior/stifff.jpg")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.description}>Stiff é um exercício que serve para fortalecer e aumentar a massa muscular dos glúteos, parte de trás das coxas e panturrilhas, mas também ajuda a fortalecer a lombar e parte superior das costas.
                </Text>
                </View>
        <Text style={styles.title}>2- Levantamento terra</Text>
                  <Image source={require("../../../res/img/bravefit/Posterior/terra.jpg")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.description}>O levantamento terra é um exercício multiarticular que trabalha vários músculos do corpo, principalmente os da parte de trás, como os glúteos e os músculos posteriores da coxa. Ele também ativa a região lombar e abdominal. 

                </Text>
                </View>
        <Text style={styles.title}>3- Cadeira flexora</Text>
                <Image source={require("../../../res/img/bravefit/Posterior/cadeira.jpg")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.description}>Além dos isquiotibiais e quadríceps, a cadeira flexora trabalha com o músculo gastrocnêmio que está presente na parte posterior da perna e tem como função dar estabilidade na realização dos movimentos com as pernas e também cuida da flexão da perna.
                </Text>
                </View>
          <Text style={styles.title}>4- Mesa flexora</Text>
                <Image source={require("../../../res/img/bravefit/Posterior/mesa-flexora.jpg")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.description}> Também conhecida como mesa romana, o equipamento permite realizar movimentos de flexão dos joelhos. Com uma excecução fácil, o exercício permite trabalhar os músculos isquiotibiais, por exemplo, que são muito utilizados em ações diárias simples, como flexionar as pernas, correr e chutar.
                </Text>
                </View>
                </View>
                
                
      </ScrollView>
    </SafeAreaView>
  );
}
