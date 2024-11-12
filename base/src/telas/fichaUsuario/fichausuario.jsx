import React, { useState, useEffect, useCallback } from "react";
import { View, SafeAreaView, ScrollView, ImageBackground, TouchableOpacity, FlatList, TextInput, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Alert } from "react-native";
import { Text, Header } from '@rneui/themed';
import styles from "./Style";
import axios from 'axios';

const Sidebar = ({ isOpen, onClose }) => {
  const [translateX] = useState(new Animated.Value(300));

  useEffect(() => {
    Animated.timing(translateX, {
      toValue: isOpen ? 0 : 300,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [isOpen]);

  const navigation = useNavigation();
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
    onClose();
  };

  return (
    <Animated.View style={[styles.sidebarContainer, { transform: [{ translateX }] }]}>
      <TouchableOpacity onPress={onClose} style={styles.closeButton}>
        <Text style={styles.closeButtonText}>Fechar</Text>
      </TouchableOpacity>
      <View style={styles.sidebarContent}>
        <Text style={styles.sidebarTitle}>Login</Text>
        <TouchableOpacity style={styles.sidebarItem} onPress={() => navigateToScreen('LoginScreen')}>
          <Text style={styles.sidebarItemText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sidebarItem} onPress={() => navigateToScreen('RegisterScreen')}>
          <Text style={styles.sidebarItemText}>Registrar</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

const FichaUsuario = ({ route }) => {
  const id_usuario = route.params.obj.id;
  const navigation = useNavigation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(`http://10.0.2.2:8085/api/fichasCadastradasUser/${id_usuario}`);
      const sortedData = response.data.sort((a, b) => a.id - b.id);
      setData(sortedData);
      setFilteredData(sortedData);
    } catch (error) {
      //return error
    }
  }, [id_usuario]); //adicionar a dependência aqui

  useEffect(() => {
    fetchData(); // chama fetchData quando o componente é montado

    // Define o intervalo para recarregar os dados a cada 10 segundos
    const intervalId = setInterval(() => {
      fetchData(); // Chama a função de buscar dados
    }, 10000); // 10000 milissegundos = 10 segundos

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(intervalId);
  }, [fetchData]);

  const toggleSidebar = () => setIsSidebarOpen(prev => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);

  const toggleSearch = () => {
    setIsSearchVisible(prev => !prev);
    if (isSearchVisible) {
      setSearchQuery('');
      setFilteredData(data);
    }
  };
  const deleteficha = (id) => {
    Alert.alert(
      "Confirmar Exclusão",
      "Você tem certeza que deseja deletar esta receita?",
      [
        {
          text: "cancelar",
          onPress: () => console.log("Exclusão cancelada"),
          style: "cancel"
        },
        {
          text: "Sim",
          onPress: async () => {
            try {

              console.log("idddddddddddddddd")
              console.log(id_usuario);
              const res = await axios.delete(`http://10.0.2.2:8085/api/deleteficha/${id_usuario}`);

              if (res.status === 200) {
                setData(currentData => currentData.filter(recipe => recipe.id !== id));
                setFilteredData(currentData => currentData.filter(recipe => recipe.id !== id));
                Alert.alert("Ficha deletada com sucesso!");
              }
            } catch (err) {
              return err;
            }
          }
        }
      ],
      { cancelable: false }
    );
  };

  const handleSearch = useCallback((query) => {
    setSearchQuery(query);
    if (query === '') {
      setFilteredData(data);
    } else {
      setFilteredData(data.filter(item => item.title.toLowerCase().includes(query.toLowerCase())));
    }
  }, [data]);

  const handleVizualizar = (id) => {
    navigation.navigate('VizualizacaoFicha', { id });
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <View style={styles.card}>
        <TouchableOpacity onPress={() => handleVizualizar(item.id)}>
          <View style={styles.content}>
            <Text style={styles.title}>{"Peso: " + item.peso + "kg"}</Text>
            <Text style={styles.title}>{"Suplementaçao: " + item.suplementacao}</Text>
            <Text style={styles.title}>{"Nutricionista: " + item.nutricionista}</Text>
            <Text style={styles.title}>{"Objetivo: " + item.objetivo}</Text>
            <TouchableOpacity onPress={() => deleteficha(item.id)} style={styles.iconWrapper}>
              <Text>deletar</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header
        backgroundColor="#27438C"
        barStyle="light-content"
        centerComponent={{
          text: 'SUA FICHA',
          style: { color: "#fff", fontSize: 20, fontWeight: "bold" },
        }}
        leftComponent={{
          icon: 'arrow-back',
          color: '#fff',
          onPress: () => navigation.goBack(),
        }}
      />
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
      <ScrollView>
        {isSearchVisible && (
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Pesquisar..."
              value={searchQuery}
              onChangeText={handleSearch}
            />
          </View>
        )}
        <View style={styles.section}>
          <View style={styles.newsCard}>
            <ImageBackground
              source={require("../../../res/img/bravefit/suaficha.png")}
              style={styles.newsImage}
            />
          </View>
        </View>

        <FlatList
          data={filteredData}
          renderItem={renderItem}
          keyExtractor={item => String(item.id)}
          numColumns={2}
          columnWrapperStyle={styles.row}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default FichaUsuario;