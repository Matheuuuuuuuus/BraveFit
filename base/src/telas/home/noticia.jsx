import React, {useState, useEffect} from "react";
import { View, SafeAreaView, ScrollView, Image, FlatList } from 'react-native';
import { Text, Header } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios'
import styles from "../costas/Style";

export default function Noticias({navigation,route}) {


  const [data, setData] = useState([]);
    const [mostrarNews, setMostrarNews] = useState(false);
    const id = route.params.id
    
        useEffect(()=>{
            axios.get(`http://10.0.2.2:8085/api/readNewsID/${id}`)
           
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

        const renderItem = ({item})=> (
           
          <View style={styles.itemNew}> 
           <View style={styles.card}>

        
                  <View style={styles.contentCard}>
                  <Text style={styles.titleContent}>{item.description}</Text>
                  <Text style={styles.description}>{item.content}
                </Text>
                </View>
               </View>
          </View>
          
      );

        
  return (
    <SafeAreaView style={styles.scrollview}>
      <Header
        backgroundColor="#27438C"
        barStyle="light-content"
        centerComponent={{
          text: 'Notícias',
          style: { color: "#fff", fontSize: 20, fontWeight: "bold" },
        }}
        leftComponent={{
          icon: 'arrow-back',
          color: '#fff',
          onPress: () => navigation.goBack(),
        }}
      />
    
          <View>
          <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => String(item.id)}
          />
          </View>
          

    </SafeAreaView>
  );
}
