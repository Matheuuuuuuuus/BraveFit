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
          text: 'TRÍCEPS',
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
        <Text style={styles.titleCard}>Confira os melhores exercícos para os seus Tríceps:</Text>
        </View>
        <Text style={styles.title}>1- Tríceps testa barra W</Text>
                  <Image source={require("../../../res/img/bravefit/Triceps/testa.jpg")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.description}>O tríceps testa com barra é um exercício que visa o músculo tríceps. Pode ser feito com pesos livres, como halteres, ou em um aparelho de musculação com cabos e roldanas
                  </Text>
                </View>
        <Text style={styles.title}>2- Tríceps francês </Text>
                  <Image source={require("../../../res/img/bravefit/Triceps/frances.jpg")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.description}>O tríceps francês é um exercício que trabalha as três cabeças do tríceps, permitindo uma hipertrofia mais uniforme.
                  </Text>
                </View>
        <Text style={styles.title}>3- Tríceps corda</Text>
                <Image source={require("../../../res/img/bravefit/Triceps/Tríceps-Corda.jpg")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.description}>O tríceps corda é um exercício de musculação que trabalha o isolamento da parte de trás do braço, por meio da extensão do cotovelo, e atua em três partes do tríceps ou tríceps braquial, com a cabeça medial, longa e, principalmente, a lateral.
                  </Text>
                </View>
          <Text style={styles.title}>4- Tríceps barra</Text>
                <Image source={require("../../../res/img/bravefit/Triceps/triceps-barra.jpg")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.description}>Já o exercício de tríceps com barra envolve uma barra reta presa a uma polia alta. Durante o movimento, os braços são estendidos para baixo, mantendo os cotovelos próximos ao corpo.
                  </Text>
                </View>
                </View>
                
                
      </ScrollView>
    </SafeAreaView>
  );
}
