import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import MainScreen from './screens/MainScreen';
import ServiciosScreen from './screens/ServiciosScreen';
import ProductosScreen from './screens/ProductosScreen';
import TransporteScreen from './screens/TransporteScreen';
import SplashScreen from './screens/SplashScreen';
import Otros from './screens/Otros';
import Regester from './screens/RegistrarScreen'
import Number from './screens/NumberVerify'
import info from './screens/infousuario'


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Servicios" component={ServiciosScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Productos" component={ProductosScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Transporte" component={TransporteScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Otros" component={Otros} options={{ headerShown: false }}/>
        <Stack.Screen name="Regester" component={Regester} options={{ headerShown: false }}/>
        <Stack.Screen name="Number" component={Number} options={{ headerShown: false }}/>
        <Stack.Screen name="info" component={info} options={{ headerShown: false }}/>



      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
