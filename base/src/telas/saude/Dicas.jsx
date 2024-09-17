import React, { useState } from "react";
import { View, SafeAreaView, ScrollView, Image, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text, Header } from '@rneui/themed';

export default function Dicas() {
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
          <TouchableOpacity style={styles.sidebarItem} onPress={() => navigateToScreen('Suplementos')}>
            <Text style={styles.sidebarItemText}>Suplementos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sidebarItem} onPress={() => navigateToScreen('Dicas')}>
            <Text style={styles.sidebarItemText}>Dicas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sidebarItem} onPress={() => navigateToScreen('Inicio')}>
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

  // Exemplo de dicas
  const dicas = [
    {
      titulo: 'Hidrate-se Adequadamente',
      descricao: 'Beber água suficiente é essencial para manter a saúde geral e otimizar o desempenho durante os treinos.',
      imagem: require("../../../res/img/bravefit/Dica/hidra.jpg"),
    },
    {
      titulo: 'Faça Alongamentos',
      descricao: 'Alongar antes e depois dos exercícios pode ajudar a prevenir lesões e melhorar a flexibilidade.',
      imagem: require("../../../res/img/bravefit/Dica/alongamento.jpg"),
    },
    {
      titulo: 'Durma Bem',
      descricao: 'Uma boa noite de sono é fundamental para a recuperação muscular e a performance atlética.',
      imagem: require("../../../res/img/bravefit/Dica/sono.jpg"),
    },
    {
      titulo: 'Mantenha uma Dieta Balanceada',
      descricao: 'Uma alimentação rica em nutrientes é crucial para o bom funcionamento do corpo e o sucesso dos treinos.',
      imagem: require("../../../res/img/bravefit/Dica/dieta-balanceada.jpg"),
    },
    {
      titulo: 'Varie Seus Treinos',
      descricao: 'Mudar sua rotina de exercícios pode ajudar a evitar platôs e manter o interesse pelos treinos.',
      imagem: require("../../../res/img/bravefit/Dica/treino.jpg"),
    },
    {
      titulo: 'Evite o Estresse',
      descricao: 'O estresse pode afetar negativamente sua saúde e desempenho. Encontre maneiras de relaxar e descontrair.',
      imagem: require("../../../res/img/bravefit/Dica/calma.jpg"),
    },
    {
      titulo: 'Mantenha-se Motivado',
      descricao: 'Defina metas claras e comemore suas conquistas. Manter a motivação é chave para alcançar seus objetivos.',
      imagem: require("../../../res/img/bravefit/Dica/foco.png"),
    },
    {
      titulo: 'Consulte um Profissional',
      descricao: 'Busque orientação de um profissional para personalizar seu plano de exercícios e dieta.',
      imagem: require("../../../res/img/bravefit/Dica/nutri.jpg"),
    },
  ];

  return (
    <SafeAreaView style={styles.containerScroll}>
      <Header
        backgroundColor='#27438C'
        barStyle="light-content"
        centerComponent={{
          text: 'Dicas',
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
            source={require("../../../res/img/bravefit/Dica/dicas.jpg")}
            style={styles.newsImage}>
            <View style={styles.imageTextContainer}>
              <Text style={styles.imageText}>DICAS</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.section}>
          {dicas.map((dica, index) => (
            <View key={index} style={styles.dicaCard}>
              <Image
                source={dica.imagem}
                style={styles.dicaImage}
              />
              <View style={styles.dicaContent}>
                <Text style={styles.dicaTitle}>{dica.titulo}</Text>
                <Text style={styles.dicaDescricao}>{dica.descricao}</Text>
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
  dicaCard: {
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
  dicaImage: {
    width: 150,
    height: 170,
    borderRadius: 8,
  },
  dicaContent: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  dicaTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#537BE2'
  },
  dicaDescricao: {
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
