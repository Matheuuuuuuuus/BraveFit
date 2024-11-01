import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Icon } from '@rneui/themed';
import Home from '../../telas/home/HomePage';
import treino from '../../telas/treinos/Treinos';
import ficha from '../../telas/ficha/Ficha';
import imc from '../../telas/imc/IMC';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FichaUsuario from '../../telas/fichaUsuario/fichausuario';
import CadastrarFicha from '../../telas/ficha/Ficha';

const Tab = createBottomTabNavigator();

export default function Inicio({route}) {
  const obj = route.params.userData;
  console.log(obj)

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'newspaper' : 'newspaper-sharp';
          } else if (route.name === 'Treinos') {
            iconName = focused ? 'barbell' : 'barbell-sharp';
          } else if (route.name === 'IMC') {
            iconName = focused ? 'scale' : 'scale-sharp';
          } else if (route.name === 'Ficha') {
            iconName = focused ? 'document' : 'document-sharp';
          }
          
          return (
            <Icon
              type='ionicon'
              name={iconName}
              size={25}
              color={color}
            />
          );
        },

        tabBarStyle: {
          height: 60,
          backgroundColor: '#27438C',
          borderColor: '#EDE9E4',
        },
        tabBarActiveTintColor: '#EDE9E4',
        tabBarInactiveTintColor: '#c4c1be',
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarHideOnKeyboard: true, 
      })}
    >
      <Tab.Screen initialParams={{ obj }} options={{headerShown: false}} name="Home" component={Home} />
      <Tab.Screen initialParams={{ obj }} options={{headerShown: false}} name="Treinos" component={treino} />
      
      <Tab.Screen initialParams={{ obj }} 
        options={{
          headerShown: false,
          tabBarStyle: {
            display: "none",
          },
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.centerButton}>
                <Image
                  source={require("../../../res/img/bravefit/adicionar.png")}
                  style={styles.newsImage}
                />
              </View>
            );
          },
        }} 
        name="  " 
        component={CadastrarFicha} 
      />

<Tab.Screen initialParams={{ obj }} options={{headerShown: false}} name="IMC" component={imc} />
<Tab.Screen initialParams={{ obj }} options={{headerShown: false}} name="Ficha" component={FichaUsuario} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  newsImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    resizeMode: 'contain',
  },
  centerButton: {
    height: 55,
    width: 55,
    borderRadius: 40,
    backgroundColor: '#2058AB',
    justifyContent: 'center',
    elevation: 10,
    alignItems: 'center',
  },
});