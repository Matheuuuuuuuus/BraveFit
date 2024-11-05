import React, {useState , useEffect} from "react";
import {  View, SafeAreaView, ScrollView, Image, ImageBackground, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text, Header,} from '@rneui/themed';
import styles from "./Styles";
import axios from 'axios'


export default function Home({ navigation, route}) {

  const Sidebar = ({ isOpen, onClose }) => {
    const navigation = useNavigation();
    const navigateToScreen = (screenName) => {
      navigation.navigate(screenName);
      onClose(); 
  };

    return (
      <View style={[styles.sidebarContainer, { transform: [{ translateX: isOpen ? 0 : -300 }] }]}>
      <TouchableOpacity onPress={onClose} style={styles.closeButton}>
        <Text style={styles.closeButtonText}>Fechar</Text>
      </TouchableOpacity>

      <View style={styles.sidebarContent}>
        <Text style={styles.sidebarTitle}>Login</Text>
        <TouchableOpacity style={styles.sidebarItem} onPress={() => 
              navigation.navigate('Login')}>
          <Text style={styles.sidebarItemText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sidebarItem} onPress={() => 
              navigation.navigate('Register')}>
          <Text style={styles.sidebarItemText}>Registrar</Text>
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

  const [data, setData] = useState([]);
  
  
      useEffect(()=>{
          axios.get(`http://10.0.2.2:8085/api/readNews`)
          .then(response =>{
              //Ordenar os dados pelo id em ordem crescente
              const sortData= response.data.sort((a,b) => a.id - b.id);
              setData(sortData);
  
          })
          .catch(error => {
              console.log(JSON.stringify(error));
          });
          console.log(data)
      },[]);

      const handleVizualizar = (id) =>{
        navigation.navigate('Noticias', {id})
    };
      
      const renderItem = ({item})=> (
           
        <View style={styles.item}> 
               <View style={styles.card}>
                  <Image source={require("../../../res/img/bravefit/noticiaBrave.png")} style={styles.image} />
                  <View style={styles.content}>
                  <TouchableOpacity onPress={()=> handleVizualizar(item.id)}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.description}>{item.description}</Text>
                  </TouchableOpacity>
                </View>
               </View>

        </View>
        
    );

  
    return (
      <SafeAreaView style={styles.container}>
      
        <Header
          backgroundColor="#27438C"
          barStyle="light-content"
          centerComponent={{
            text: 'BraveFit',
            style: { color: "#fff", fontSize: 20, fontWeight: "bold" },
          }}
          leftComponent={{
            icon: 'menu',
            color: '#fff',
            onPress: toggleSidebar // Adiciona onPress para abrir/fechar a barra lateral
          }}
        />
       <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
       
          <ScrollView>
                 {/* Notícias */}
                <View>
                    <View>
                      <Text style={styles.sectionTitle}>Notícias</Text>
                    </View>  
                </View>

                 
                 <FlatList
                 scrollEnabled={false}
                   data={data}
                   renderItem={renderItem}
                   keyExtractor={item => String(item.id)}
                   />
              </ScrollView>
          </SafeAreaView>
    );
   
}

