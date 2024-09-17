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
          text: 'GLÚTEO',
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
        <Text style={styles.titleCard}>Confira os melhores exercícos para o seu glúteo:</Text>
        </View>
        <Text style={styles.title}>1- Elevação Pélvica</Text>
                  <Image source={require("../../../res/img/bravefit/gluteo/pélvica.jpg")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.description}>A elevação pélvica, ou elevação de quadril, é um exercício muito indicado para fortalecer e aumentar os glúteos, além de trabalhar os músculos do abdômen, da coxa, da lateral dos quadris e da coluna lombar.
                </Text>
                </View>
        <Text style={styles.title}>2- Levantamento terra</Text>
                  <Image source={require("../../../res/img/bravefit/gluteo/levantamento-terra.jpg")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.description}>O levantamento terra é um exercício multiarticular que trabalha vários músculos do corpo, principalmente os da parte de trás, como os glúteos e os músculos posteriores da coxa. Ele também ativa a região lombar e abdominal. 
                </Text>
                </View>
        <Text style={styles.title}>3- Stiff</Text>
                <Image source={require("../../../res/img/bravefit/gluteo/stiff.jpg")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.description}>O stiff é um exercício de levantamento de peso que fortalece os músculos das pernas e glúteos, principalmente as partes traseiras. Ele é realizado em pé, com halteres, barra ou apenas o peso do corpo, e tem como objetivo movimentar os membros inferiores sem dobrar as pernas.
                </Text>
                </View>
          <Text style={styles.title}>4- Cadeira abdutora</Text>
                <Image source={require("../../../res/img/bravefit/gluteo/cadeira-abdutora.jpg")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.description}>O treino abdutor é um exercício focado nos músculos abdutores. São aqueles que estão presentes na parte externa das coxas, cuja finalidade é ajudar na estabilização e no fortalecimento da região do quadril. Além disso, também são responsáveis pelo glúteo médio e glúteo mínimo.
                </Text>
                </View>
                <Text style={styles.title}>5- Coice na polia</Text>
                <Image source={require("../../../res/img/bravefit/gluteo/coice-na-polia.jpg")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.description}>O coice na polia é um exercício que ajuda a fortalecer, hipertrofiar e desenhar os glúteos. 
                </Text>
                </View>
                <Text style={styles.title}>6- Agachamento sumo</Text>
                <Image source={require("../../../res/img/bravefit/gluteo/agachamento-sumo.jpg")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.description}>O agachamento sumô é um exercício de perna que ajuda a trabalhar o quadríceps, glúteos e parte interna da coxa, além de também ajudar a fortalecer a região abdominal e as costas, já que estão ativadas durante todo o movimento.
                </Text>
                </View>
                <Text style={styles.title}>7- Agachamento no smith</Text>
                <Image source={require("../../../res/img/bravefit/gluteo/agachamento.jpg")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.description}>Agachamento smith é um tipo de agachamento que trabalha principalmente os músculos da perna e glúteos, ajudando a aumentar a massa e a força muscular da parte inferior do corpo, sendo feito em uma aparelho chamado máquina Smith.
                </Text>
                </View>
                <Text style={styles.title}>8- Leg Press</Text>
                <Image source={require("../../../res/img/bravefit/gluteo/leg.jpg")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.description}>Leg press é um exercício que serve para trabalhar os músculos das coxas, glúteos e panturrilhas, ajudando a aumentar a massa e a força muscular, sendo por isso indicado para o fortalecimento ou hipertrofia muscular.
                  </Text>
                </View>
                <Text style={styles.title}>9- Búlgaro</Text>
                <Image source={require("../../../res/img/bravefit/gluteo/leg.jpg")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.description}>O agachamento búlgaro é um exercício de perna que trabalha principalmente o quadríceps e os glúteos, promovendo o fortalecimento e hipertrofia desses músculos. 
                  </Text>
                </View>
                </View>
                
                
      </ScrollView>
    </SafeAreaView>
  );
}
