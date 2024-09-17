import * as React from 'react';
import { Icon } from '@rneui/themed';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import HomePage from '../../telas/home/HomePage';
import Treino from '../../telas/treinos/Treinos';
import IMC from '../../telas/imc/IMC';
import Saude from '../../telas/saude/Nutricionista';

import Login from '../../telas/login/Login';
import Register from '../../telas/register/Register';
import HomeLogin  from '../../telas/homeLogin/HomeLogin';
import Atualizar  from '../../telas/atualizar/Atualizar';

import Suplementos from '../../telas/saude/Suplementos';
import Dicas from '../../telas/saude/Dicas';
import Costas from '../../telas/costas/Costas';
import Peito from '../../telas/peito/Peito';
import Quadriceps from '../../telas/quadriceps/Quadriceps';
import Posterior from '../../telas/posterior/Posterior';
import Gluteo from '../../telas/gluteo/Gluteo';
import Ombro from '../../telas/ombro/Ombro';
import Biceps from '../../telas/biceps/Biceps';
import Triceps from '../../telas/triceps/Triceps';
import Abdomen from '../../telas/abdomen/Abdomen';
import Panturrilha from '../../telas/panturrilha/Panturrilha';
import Noticias from '../../telas/home/noticia';
import ficha from '../../telas/ficha/Ficha';
import fichaUsuario from '../../telas/fichaUsuario/fichausuario';
import fichaVisualização from '../../telas/fichaUsuario/VizualizacaoFicha';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const CustomTabBar = ({ state, descriptors, navigation}) => {
  
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel !== undefined ? options.tabBarLabel : options.title !== undefined ? options.title : route.name;
        const isFocused = state.index === index;

        const iconName = getIconName(route.name, isFocused);

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={label}
            onPress={onPress}
            style={styles.tabButton}
          >
            <Icon
              type='ionicon'
              name={iconName}
              size={24}
              color={isFocused ? '#ffffff' : '#f7e6e6'}
            />
            <Text style={{ color: isFocused ? '#ffffff' : '#f7e6e6' }}>{label}</Text>
          </TouchableOpacity>
        );
      })}
      <TouchableOpacity style={styles.centerButton} onPress={() => navigation.navigate('ficha')}>
        <Image
          source={require("../../../res/img/bravefit/adicionar.png")}
          style={styles.newsImage}
        />
      </TouchableOpacity>
    </View>
  );
};

const getIconName = (routeName, focused) => {
  switch (routeName) {
    case 'Home':
      return focused ? 'home' : 'home-outline';
    case 'Treino':
      return focused ? 'flame' : 'flame-outline';
    case 'IMC':
      return focused ? 'heart' : 'heart-outline';
    case 'Ficha':
      return focused ? 'call' : 'call-outline';
    default:
      return 'home-outline'; 
  }
};
export function Inicio({route}) {
  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{
        tabBarStyle: { backgroundColor: '#fff'},
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#888',
      }}      
    >
      <Tab.Screen name="Home" component={HomePage} options={{ headerShown: false }} />
      <Tab.Screen name="Treino" component={Treino} options={{ headerShown: false }} /> 
      <Tab.Screen name="IMC" component={IMC} options={{ headerShown: false }} />
      <Tab.Screen name="Saude" component={fichaUsuario} options={{ headerShown: false }} />
    </Tab.Navigator>
  )}
export default function Rotas() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='HomePage'>
        {/*telas principais*/}
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="HomeLogin" component={HomeLogin} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Atualizar" component={Atualizar} /> 
        <Stack.Screen name="Login" component={Login} />
        {/*Imc*/}
        <Stack.Screen name="IMC" component={IMC} />
        {/*Saude*/}
        <Stack.Screen name="Suplementos" component={Suplementos} />
        <Stack.Screen name="Dicas" component={Dicas} /> 
        {/*Treinos*/}
        <Stack.Screen name="Costas" component={Costas} /> 
        <Stack.Screen name="Posterior" component={Posterior} /> 
        <Stack.Screen name="Quadriceps" component={Quadriceps} /> 
        <Stack.Screen name="Gluteo" component={Gluteo} /> 
        <Stack.Screen name="Peito" component={Peito} /> 
        <Stack.Screen name="Ombro" component={Ombro} /> 
        <Stack.Screen name="Biceps" component={Biceps} /> 
        <Stack.Screen name="Triceps" component={Triceps} /> 
        <Stack.Screen name="Abdomen" component={Abdomen} /> 
        <Stack.Screen name="Panturrilha" component={Panturrilha} /> 
        <Stack.Screen name="Noticias" component={Noticias} /> 
        <Stack.Screen name="ficha" component={ficha} /> 
        <Stack.Screen name="fichaUsuario" component={fichaUsuario} /> 
        <Stack.Screen name="fichaVisualização" component={fichaVisualização} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#27438C',
    borderTopColor: '#27438C',
    borderTopWidth: 1,
    alignItems: 'center',
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  newsImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    resizeMode: 'contain',
  },
  centerButton: {
    position: 'absolute',
    left: 175,
    bottom: 30,
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: '#2058ab',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
  },
});
