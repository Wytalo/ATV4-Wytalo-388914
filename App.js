import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from './screens/Home'
import Cadastro from './screens/Cadastro'
import IMC from './screens/IMC'
import Sobre from './screens/Sobre'
import Perfil from './screens/Perfil'
import Resultado from './screens/Resultado'

const Stack = createStackNavigator();

const options = {
  headerStyle: {
    backgroundColor: '#00796b',
  },
  headerTintColor: '#fff'
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ title: 'ATV 04', ...options }} />
        <Stack.Screen name="Cadastro" component={Cadastro} options={options} />
        <Stack.Screen name="IMC" component={IMC} options={options} />
        <Stack.Screen name="Sobre" component={Sobre} options={options} />
        <Stack.Screen name="Perfil" component={Perfil} options={options} />
        <Stack.Screen name="Resultado" component={Resultado} options={options} />
      </Stack.Navigator>
    </NavigationContainer>
  );

}
