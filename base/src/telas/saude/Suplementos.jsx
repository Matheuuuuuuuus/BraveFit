import React, { useState } from "react";
import { View, SafeAreaView, ScrollView, Image, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text, Header } from '@rneui/themed';

export default function Home() {
  const Sidebar = ({ isOpen, onClose }) => {
    const navigation = useNavigation();
    const navigateToScreen = (screennome) => {
      navigation.navigate(screennome);
      onClose();
    };

    return (

      <View style={[styles.sidebarContainer, { transform: [{ translateX: isOpen ? 0 : -300 }] }]}>
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <Text style={styles.closeButtonText}>Fechar</Text>
        </TouchableOpacity>

        <View style={styles.sidebarContent}>
          <Text style={styles.sidebarTitle}>SAÚDE</Text>
          <TouchableOpacity style={styles.sidebarItem} onPress={() =>
            navigation.navigate('Suplementos')}>
            <Text style={styles.sidebarItemText}>Suplementos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sidebarItem} onPress={() =>
            navigation.navigate('Dicas')}>
            <Text style={styles.sidebarItemText}>Dicas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sidebarItem} onPress={() =>
            navigation.navigate('Inicio')}>
            <Text style={styles.sidebarItemText}>Treinos</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const [maisInformacaoVisivel, setMaisInformacaoVisivel] = useState(false);

  const handleCarregarMais = () => {
    setMaisInformacaoVisivel(!maisInformacaoVisivel);
  };

  const suplementos = [
    {
      nome: 'Creatina',
      description: ' A creatina ajuda na recuperação muscular pós-treino, diminui a fadiga e aumenta a força para a execução de movimentos de resistência.',
      image: require("../../../res/img/bravefit/Suplementos/tomar-creatina.jpg"),
    },
    {
      nome: 'Whey protein',
      description: ' Whey protein é um suplemento alimentar ideal para quem deseja ganhar massa muscular e recuperar-se mais rapidamente após o treino.',
      image: require("../../../res/img/bravefit/Suplementos/whey-protein.jpg"),
    },
    {
      nome: 'Beta-alanina',
      description: ' A beta-alanina serve para adiar a fadiga muscular em treinos longos..',
      image: require("../../../res/img/bravefit/Suplementos/beta.jpg"),
    },
    {
      nome: 'BCAAS',
      description: ' BCAA é um suplemento alimentar ideal para quem deseja ganhar massa muscular e recuperar-se mais rapidamente após o treino.',
      image: require("../../../res/img/bravefit/Suplementos/bcaa.jpg"),
    },
    {
      nome: 'Glutamina',
      description: ' Fornece energia e atua com catabolizante, fortalecendo o sistema imunológico e minimizando a fadiga muscular.',
      image: require("../../../res/img/bravefit/Suplementos/glutamina.jpg"),
    },
    {
      nome: 'Hipercalóricos:',
      description: ' Indicados principalmente para as pessoas mais magras que tem dificuldade de ganhar massa muscular. ',
      image: require("../../../res/img/bravefit/Suplementos/hipercalorico.jpg"),
    },
    {
      nome: ' Albumina',
      description: ' Importante na manutenção e construção de músculos e tecidos.',
      image: require("../../../res/img/bravefit/Suplementos/albumina.jpg"),
    },
    {
      nome: ' Ômega 3',
      description: ' É essencial para regular a queima dos depósitos gordurosos e a fome',
      image: require("../../../res/img/bravefit/Suplementos/omega-3.jpg"),
    },
    {
      nome: ' Cafeína',
      description: ' Ela aumenta a resistência muscular e reduz a percepção subjetiva de esforço.',
      image: require("../../../res/img/bravefit/Suplementos/cafeina.jpg"),
    },
    {
      nome: ' Multivitamínico',
      description: ' Composto por diversas vitaminas e minerais, que podem fornecer a nutrição diária exigida pelo corpo humano.',
      image: require("../../../res/img/bravefit/Suplementos/vitaminicos.jpg"),
    },
  ];

  return (
    <SafeAreaView style={styles.containerScroll}>
      <Header
        backgroundColor='#27438C'
        barStyle="light-content"
        centerComponent={{
          text: 'Suplementos',
          style: { color: "#fff", fontSize: 20, fontWeight: "bold", },
        }}
        leftComponent={{
          icon: 'menu',
          color: '#fff',
          onPress: toggleSidebar
        }}
      />

      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

      <ScrollView>
      <View style={styles.newsCard}>
            <ImageBackground
              source={require("../../../res/img/bravefit/Suplementos/suplementos.jpg")}
              style={styles.newsImage}>
              <View style={styles.imageTextContainer}>
                <Text style={styles.imageText}>SUPLEMENTOS</Text>
              </View>
            </ImageBackground>
          </View>
        <View style={styles.section}>
          {suplementos.map((suplemento, index) => (
            <View key={index} style={styles.supplementCard}>
              <Image
                source={suplemento.image}
                style={styles.supplementImage}
              />
              <View style={styles.supplementContent}>
                <Text style={styles.supplementTitle}>{suplemento.nome}</Text>
                <Text style={styles.supplementDescription}>{suplemento.description}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerScroll: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageText:{
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#ffffff',
  },
  sidebarContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#537BE2', 
    height: '100%',
    width: 250,
    zIndex: 100,
    elevation: 5,
    paddingTop: 50,
    transition: 'none', 
  },
  sidebarContent: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  sidebarTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 20,
    color: '#f2f2f2', 
  },
  sidebarItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.2)', 
    flexDirection: 'row',
    alignItems: 'center', 
  },
  sidebarItemText: {
    fontSize: 18,
    color: '#f2f2f2',
    flex: 1, 
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 10,
  },
  closeButtonText: {
    fontSize: 16,
    color: '#f2f2f2',
    marginTop: 20,
  },
  section: {
    padding: 16,
    
  },
  supplementCard: {
    flexDirection: 'row',
    marginBottom: 20,
    borderRadius: 8,
    overflow: 'hidden',
    borderColor: '#ddd',
    borderWidth: 1,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  supplementImage: {
    width: 150,
    height: 170,
    borderRadius: 8,
  },
  supplementContent: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  supplementTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#537BE2'
  },
  supplementDescription: {
    fontSize: 16,
    color: '#666',
  },
  newsImage: {
    width: '100%',
    height: 130,
    justifyContent: 'center',
    alignItems: 'center',
},
newsCard: {
  marginBottom: 6,
},
});
