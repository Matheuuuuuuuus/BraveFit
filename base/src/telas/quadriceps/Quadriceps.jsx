import React from "react";
import { View, SafeAreaView, ScrollView, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text, Header } from '@rneui/themed';
import styles from "./Styles";

export default function Home() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.scrollview}>
      <Header
        backgroundColor="#27438C"
        barStyle="light-content"
        centerComponent={{
          text: 'QUADRÍCEPS',
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
        <Text style={styles.titleCard}>Confira os melhores exercícos para os seus quadríceps:</Text>
        </View>
                <Text style={styles.titleContent}>1 - Agachamento</Text>
                  <Image source={require("../../../res/img/bravefit/Quadriceps/agachamanento.jpg")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.description}>Ele é um dos exercícios mais funcionais e completos para membros inferiores, porque trabalha os glúteos, o quadríceps e os posteriores da coxa.
                </Text>
                </View>
                <Text style={styles.titleContent}>2- Leg press 45</Text>
                  <Image source={require("../../../res/img/bravefit/Quadriceps/leg-press-45.jpg")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.description}>O leg press 45º é uma ótima opção para quem deseja, sobretudo, tonificar a panturrilha, o quadríceps, o bumbum e todos os músculos encontrados na região posterior da coxa.
                </Text>
                </View>
                <Text style={styles.titleContent}>3- Extensora</Text>
                <Image source={require("../../../res/img/bravefit/Quadriceps/cadeira-extensora.jpg")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.description}>A cadeira extensora tem a função de trabalhar na parte inferior do corpo, mais precisamente na parte de trás das coxas e dos glúteos, é uma máquina bem consistente e trabalha bem essa função, é considerada por muitos como uma das melhores para o trabalho de pernas na academia.
                </Text>
                </View>
                <Text style={styles.titleContent}>4- Hack</Text>
                <Image source={require("../../../res/img/bravefit/Quadriceps/hack.jpg")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.description}>O agachamento hack é um exercício que serve para fortalecer as pernas e os glúteos, feito em uma máquina chamada hack, que conduz os movimentos do agachamento.
                </Text>
                </View>
                <Text style={styles.titleContent}>5- Passada Livre </Text>
                <Image source={require("../../../res/img/bravefit/Quadriceps/avanço.jpg")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.description}>O exercício Passada é prescrito a fim de fortalecer a região das coxas e glúteos, se bem executado pode gerar fortalecimento e hipertrofia dessas regiões.
                </Text>
                </View>
                
                 
                
               </View>

      </ScrollView>
    </SafeAreaView>
  );
}
