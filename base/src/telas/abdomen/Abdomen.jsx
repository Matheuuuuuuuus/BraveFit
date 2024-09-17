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
          text: 'ABDÔMEN',
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
        <Text style={styles.titleCard}>Confira os melhores exercícos para seu Abdômen:</Text>
        </View>
        <Text style={styles.title}>1- Abdominal em V</Text>
                  <Image source={require("../../../res/img/bravefit/Abdomen/emV.jpg")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.description}>O abdominal em V, também conhecido como V-ups, é um exercício que consiste em levantar o tronco e as pernas ao mesmo tempo, formando um V com o corpo. É um exercício avançado que pode ser feito sem equipamentos e que trabalha vários grupos musculares, principalmente os abdominais.
                </Text>
                </View>
        <Text style={styles.title}>2- Flexão com elevação do quadril (abdominal infra)</Text>
                  <Image source={require("../../../res/img/bravefit/Abdomen/treino-de-abdomen-infra.jpg")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.description}>Os exercícios de elevação de quadril ajudam a fortalecer principalmente os músculos dos glúteos e do assoalho pélvico, promovendo também melhor estabilidade nas articulações do quadril e do core. 
                </Text>
                </View>
        <Text style={styles.title}>3- Flexão do tronco (abdominal supra)</Text>
                <Image source={require("../../../res/img/bravefit/Abdomen/abdomen-supra.jpg")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.description}>A flexão de tronco é um movimento que diminui o ângulo entre o tronco e os membros inferiores. O principal músculo responsável por este movimento é o reto do abdome, sendo auxiliado pelos oblíquos interno e externo. 
                </Text>
                </View>
          <Text style={styles.title}>4- Prancha lateral</Text>
                <Image source={require("../../../res/img/bravefit/Abdomen/prancha-lateral.jpg")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.description}>A prancha lateral é um exercício de isometria que fortalece os músculos laterais do abdômen e outras partes do corpo. É um exercício desafiador e eficaz para definir a musculatura do abdômen e perder gordura na barriga. 

                  </Text>
                </View>
                <Text style={styles.title}>5- Abdominal remador </Text>
                <Image source={require("../../../res/img/bravefit/Abdomen/abdomen-remador.jpg")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.description}>O abdominal remador, também conhecido como abdominal estilo militar, é um exercício que trabalha a musculatura abdominal. Ele é feito apenas com o peso do corpo e é muito popular nas academias.
                  </Text>
                </View>
                <Text style={styles.title}>6- Abdominal clássico</Text>
                <Image source={require("../../../res/img/bravefit/Abdomen/abdominal-classico.jpg")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.description}> O abdominal clássico é um exercício que fortalece a musculatura do abdômen, principalmente o músculo reto, e é um dos tipos de abdominais mais utilizados.
                </Text>
                </View>
                <Text style={styles.title}>7- Prancha</Text>
                <Image source={require("../../../res/img/bravefit/Abdomen/prancha-exercicio.jpg")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.description}>A prancha é um exercício que consiste em manter o corpo em uma posição estática, apoiando-se nos antebraços e nos dedos dos pés. É um exercício de peso corporal que trabalha vários músculos do corpo, como o abdômen, glúteos, costas, braços e ombros.
                  </Text>
                </View>
                </View>
                
                
      </ScrollView>
    </SafeAreaView>
  );
}
