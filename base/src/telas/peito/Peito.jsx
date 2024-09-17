import React from "react";
import { View, SafeAreaView, ScrollView, Image } from 'react-native';
import { Text, Header } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import styles from "./Styles";

export default function Home() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.scrollview}>
      <Header
        backgroundColor="#27438C"
        barStyle="light-content"
        centerComponent={{
          text: 'PEITO',
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
        <Text style={styles.titleCard}>Confira os melhores exercícos para o seu peito:</Text>
        </View>
        <Text style={styles.title}>1- Supino reto com barra</Text>
                  <Image source={require("../../../res/img/bravefit/Peito/supinoreto.jpg")} style={styles.image} />
                  <View style={styles.content}>
                 <Text style={styles.description}>Supino é um exercício multiarticulares, ou seja, que envolve várias articulações, que tem como ênfase o trabalho do músculo peitoral maior.
                </Text>
                </View>
        <Text style={styles.title}>2- Supino inclinado com halteres</Text>
                  <Image source={require("../../../res/img/bravefit/Peito/supinoinclinadocomhalteres.jpg")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.description}>Dentre os músculos ativados, a execução no banco inclinado favorece maior ativação da porção clavicular do peitoral maior em detrimento da porção esternocostal.
                </Text>
                </View>
        <Text style={styles.title}>3– Crossover com polia alta</Text>
                <Image source={require("../../../res/img/bravefit/Peito/crossover.jpg")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.description}> O crossover com polia alta desenvolve e estimula o peitoral inferior. A polia fica na altura superior do equipamento (acima da cabeça).
                </Text>
                </View>
        <Text style={styles.title}>4– Cruxifico reto</Text>
                <Image source={require("../../../res/img/bravefit/Peito/crucifixreto.jpg")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.description}> O crucifixo é uma boa opção para quem busca hipertrofia ou uma maior definição do peito. Isso porque os movimentos de adução e abdução dos ombros (abrir e fechar) propostos pelo exercício têm um efeito bastante focado no principal músculo da região, o peitoral maior, contribuindo para um resultado ainda melhor.
                </Text>
                </View>
        <Text style={styles.title}>5– Flexão</Text>
                <Image source={require("../../../res/img/bravefit/Peito/flexaojpg.jpg")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.description}>Quando você faz uma flexão de braço, trabalha os músculos do peitoral, tríceps, ombros, abdômen, lombar e, até mesmo, dos membros inferiores. 
                </Text>         
                </View>
        <Text style={styles.title}>6– Afundo nas barras paralelas</Text>
                <Image source={require("../../../res/img/bravefit/Peito/afundo.jpg")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.description}>O exercício paralelas para o peitoral pode te ajudar a construir músculos no peito e nos braços.
Embora as barras paralelas sejam muito usadas para o desenvolvimento do tríceps, uma simples alteração na inclinação do seu corpo durante o exercício pode mudar o foco para o peitoral.
                </Text>         
                </View>
        <Text style={styles.title}>7- Supino reto com halters</Text>
                <Image source={require("../../../res/img/bravefit/Peito/supinoretohalter.jpg")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.description}>O supino reto com halteres é um exercício bastante eficaz para desenvolver o peitoral.
Ele permite mais amplitude de movimento do que o supino reto com barra. Assim, mesmo usando menos carga do que com a barra, os halteres garantem uma boa ativação muscular.
                </Text>  
                </View>
        <Text style={styles.title}>8- Supino inclinado na barra</Text>
                <Image source={require("../../../res/img/bravefit/Peito/supinoinclinadobarra.jpg")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.description}> Supino inclinado com barra é um ótimo exercício para tornar o peitoral bem definido.

Apesar de recrutar os mesmos músculos do supino reto com barra, a inclinação estimula os músculos da parte de cima do peitoral com mais intensidade.
                </Text> 
                </View> 
       <Text style={styles.title}>9- Crucifixo no voador (Peck deck)</Text>
                <Image source={require("../../../res/img/bravefit/Peito/peck-deck-.jpg")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.description}>O voador no aparelho peck deck é um exercício que trabalha o peitoral maior e outros músculos da parte superior do corpo.

Assim, ele ajuda a definir os músculos do peito e também fortalece os ombros e os braços. Especificamente, os músculos ativados são o peitoral maior, o peitoral menor, o deltóide, o bíceps e o serrátil anterior.
                </Text>       
                </View> 
       <Text style={styles.title}>10- Supino Declinado</Text>
                <Image source={require("../../../res/img/bravefit/Peito/declinado.jpg")} style={styles.image} />
                  <View style={styles.content}>
                  <Text style={styles.description}>o supino declinado é uma variação feita com uma inclinação invertida com relação ao supino inclinado. Ou seja, as pernas ficam elevadas e o tronco rebaixado. Esse movimento ativa principalmente a parte inferior do peitoral.26
                </Text>       
                </View>        
                </View>
      </ScrollView>
    </SafeAreaView>
  );
}
