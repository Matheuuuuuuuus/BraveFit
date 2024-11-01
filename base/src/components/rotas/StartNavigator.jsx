
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TransitionPresets } from '@react-navigation/stack';
import Atualizar from '../../telas/atualizar/Atualizar';
import Biceps from '../../telas/biceps/Biceps';
import Costas from '../../telas/costas/Costas';
import Ficha from '../../telas/ficha/Ficha';
import Gluteo from '../../telas/gluteo/Gluteo';
import Ombro from '../../telas/ombro/Ombro';
import HomeLogin from '../../telas/homeLogin/HomeLogin';
import IMC from '../../telas/imc/IMC';
import Abdomen from '../../telas/abdomen/Abdomen';
import Login from '../../telas/login/Login';
import Panturrilha from '../../telas/panturrilha/Panturrilha';
import Peito from '../../telas/peito/Peito';
import Posterior from '../../telas/posterior/Posterior';
import Quadriceps from '../../telas/quadriceps/Quadriceps';
import Dicas from '../../telas/saude/Dicas';
import Treinos from '../../telas/treinos/Treinos';
import Triceps from '../../telas/triceps/Triceps';
import Register from '../../telas/register/Register';
import Suplementos from '../../telas/saude/Suplementos';
import  Inicio  from './tabNavigator.jsx';

const Stack = createStackNavigator();

export default function StartNavigator() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            ...TransitionPresets.ModalSlideFromBottomIOS 
          }}
          initialRouteName='HomeLogin'
        >
          <Stack.Screen name="Inicio" component={Inicio} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Abdomen" component={Abdomen} />
          <Stack.Screen name="Atualizar" component={Atualizar} />
          <Stack.Screen name="Biceps" component={Biceps} />
          <Stack.Screen name="Costas" component={Costas} />
          <Stack.Screen name="Ficha" component={Ficha} />
          <Stack.Screen name="Gluteo" component={Gluteo} />
          <Stack.Screen name="HomeLogin" component={HomeLogin} />
          <Stack.Screen name="IMC" component={IMC} />
          <Stack.Screen name="Ombro" component={Ombro} />
          <Stack.Screen name="Panturrilha" component={Panturrilha} />
          <Stack.Screen name="Peito" component={Peito} />
          <Stack.Screen name="Posterior" component={Posterior} />
          <Stack.Screen name="Quadriceps" component={Quadriceps} />
          <Stack.Screen name="Dicas" component={Dicas} />
          <Stack.Screen name="Treinos" component={Treinos} />
          <Stack.Screen name="Triceps" component={Triceps} />
          <Stack.Screen name="Suplementos" component={Suplementos} />
          
           
        </Stack.Navigator>
      </NavigationContainer>
    );
  }