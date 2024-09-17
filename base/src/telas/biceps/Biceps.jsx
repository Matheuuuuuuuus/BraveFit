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
          text: 'BÍCEPS',
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
        <Text style={styles.titleCard}>Confira os melhores exercícos para o seus Bíceps:</Text>
        </View>
        <Text style={styles.title}>1- Rosca alternada com halteres</Text>
                  <Image source={require("../../../res/img/bravefit/Biceps/alternada.jpg")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.description}>A rosca alternada é um dos principais exercícios para o fortalecimento dos braços, focado especificamente nos músculos dos bíceps. Neste exercício isolado, normalmente feito com halteres, há um trabalho individual de cada braço, o que favorece a correção de imperfeições.
                </Text>
                </View>
        <Text style={styles.title}>2- Rosca martelo </Text>
                  <Image source={require("../../../res/img/bravefit/Biceps/rosca-martelo.jpg")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.description}>A rosca martelo é especialmente focada no desenvolvimento do bíceps braquial. Esse exercício, que remete ao gesto de segurar um martelo, destaca-se por sua execução com halteres ou com a barra, simulando o movimento de bater um prego – do movimento, aliás, se origina o seu nome.
                </Text>
                </View>
        <Text style={styles.title}>3- Rosca Scott</Text>
                <Image source={require("../../../res/img/bravefit/Biceps/scott.jpg")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.description}>A rosca scott é um exercício de musculação que tem como objetivo fortalecer os músculos do braço, principalmente o bíceps braquial.
                </Text>
                </View>
          <Text style={styles.title}>4- Rosca barra W</Text>
                <Image source={require("../../../res/img/bravefit/Biceps/roscabarraw.jpg")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.description}>A rosca direta com barra W é um exercício que utiliza uma barra em formato de W para trabalhar a musculatura, principalmente o bíceps. É também conhecida como rosca direta com pegada fechada. 
                </Text>
                </View>
                <Text style={styles.title}>5- Rosca barra W inversa</Text>
                <Image source={require("../../../res/img/bravefit/Biceps/rosca-inversa.jpg")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.description}>A rosca inversa com barra W é um exercício que ativa os músculos do antebraço e do bíceps braquial. A inversão das mãos é o que provoca a maior ativação dos músculos do antebraço. 
                </Text>
                </View>
                <Text style={styles.title}>6- Rosca com corda na polia </Text>
                <Image source={require("../../../res/img/bravefit/Biceps/Rosca-biceps-corda.jpg")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.description}>A rosca bíceps no cabo usando a corda é um bom exercício para fortalecer o bíceps sob tensão constante. O cabo gera uma tensão capaz de ativar os flexores do braço por um longo período, e isso é ótimo para o fortalecimento e a hipertrofia muscular.
                </Text>
                </View>
                <Text style={styles.title}>7- Rosca inclinada com halteres</Text>
                <Image source={require("../../../res/img/bravefit/Biceps/roscainclinado.jpg")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.description}> rosca no banco com halteres é um exercício que trabalha os músculos dos braços, principalmente os bíceps. Existem diferentes variações do exercício, como a rosca direta, a rosca alternada e a rosca concentrada.
                  </Text>
                </View>
                <Text style={styles.title}>8- Rosca concentrada</Text>
                <Image source={require("../../../res/img/bravefit/Biceps/rosca-concentrada.jpg")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.description}>A rosca concentrada é um exercício físico que tem como objetivo desenvolver o músculo bíceps braquial. É um exercício monoarticular unilateral, que deve ser feito com o ombro e o cotovelo estabilizados, sem movimentos compensatórios.
                </Text>
                </View>
                </View>
                
                
      </ScrollView>
    </SafeAreaView>
  );
}
