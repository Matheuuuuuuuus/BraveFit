import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../telas/homeLogin/HomeLogin';
import Login from '../../telas/login/Login';
import Register from '../../telas/register/Register';

const Stack = createStackNavigator();

export default function Rotas() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Start'>
                <Stack.Screen options={{headerShown: false}} name="Start" component={HomeScreen} />
                <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
                <Stack.Screen options={{headerShown: false}} name="Register" component={Register} />
                <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}