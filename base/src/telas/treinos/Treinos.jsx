import React, { useState } from "react";
import { View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text, Header } from '@rneui/themed';
import FastImage from 'react-native-fast-image';
import styles from "./Style";

export default function Treinos() {
  const navigation = useNavigation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const navigateToScreen = (screenName, drillType) => {
    navigation.navigate(screenName, { drillType });
  };

  const newsData = [
    { title: 'PEITO', image: require('../../../res/img/bravefit/Peito/Treino-de-Peito-Criando-Peitorais-Gigantes.jpg'), screen: 'Peito' },
    { title: 'COSTAS', image: require('../../../res/img/bravefit/Costas/Costas.png'), screen: 'Costas' },
    { title: 'QUADRÍCEPS', image: require('../../../res/img//bravefit/Quadriceps/Quadriceps.png'), screen: 'Quadriceps' },
    { title: 'POSTERIOR', image: require('../../../res/img/bravefit/Posterior/posteriorr.png'), screen: 'Posterior'},
    { title: 'GLÚTEO', image: require('../../../res/img/bravefit/gluteo/gluteo.jpg'), screen: 'Gluteo'},
    { title: 'OMBRO', image: require('../../../res/img/bravefit/Ombro/ombros.png'), screen: 'Ombro' },
    { title: 'BÍCEPS', image: require('../../../res/img/bravefit/Biceps/biiceps.png'), screen: 'Biceps' },
    { title: 'TRÍCEPS', image: require('../../../res/img/bravefit/Triceps/triceps.png'), screen: 'Triceps' },
    { title: 'ABDÔMEN', image: require('../../../res/img/bravefit/Abdomen/abdoemn.png'), screen: 'Abdomen' },
    { title: 'PANTURRILHA', image: require('../../../res/img/bravefit/panturrilha/panturrilhaa.png'), screen: 'Panturrilha' },
  ];

  return (
    <SafeAreaView style={styles.scrollview}>
      <Header
        backgroundColor="#27438C"
        barStyle="light-content"
        centerComponent={{
          text: 'MELHORE SEU TREINO',
          style: { color: "#fff", fontSize: 20, fontWeight: "bold" },
        }}
        leftComponent={{
          icon: 'menu',
          color: '#fff',
          onPress: toggleSidebar,
        }}
      />
      {isSidebarOpen && (
        <View style={[styles.sidebarContainer, { transform: [{ translateX: isSidebarOpen ? 0 : -300 }] }]}>
          <TouchableOpacity onPress={closeSidebar} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Fechar</Text>
          </TouchableOpacity>

          <View style={styles.sidebarContent}>
            <Text style={styles.sidebarTitle}>SAÚDE</Text>
            <TouchableOpacity style={styles.sidebarItem} onPress={() => navigation.navigate('Suplementos')}>
              <Text style={styles.sidebarItemText}>Suplementos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sidebarItem} onPress={() => navigation.navigate('Dicas')}>
              <Text style={styles.sidebarItemText}>Dicas</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      <ScrollView contentContainerStyle={styles.newsContainer}>
        {newsData.map((item) => (
          <TouchableOpacity key={item.title} onPress={() => navigateToScreen(item.screen, item.title)} style={styles.newsItem}> 
            <FastImage
              source={item.image}
              style={styles.newsImage}
              resizeMode={FastImage.resizeMode.cover}
            >
              <View style={styles.imageTextContainer}>
                <Text style={styles.imageText}>{item.title}</Text>
              </View>
            </FastImage>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
