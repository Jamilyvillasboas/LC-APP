import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { NavigationContainer } from '@react-navigation/native';
//import { Ionicons } from '@expo/vector-icons'; 
import { enableScreens } from 'react-native-screens'; 

import Entradas from './app/Entradas';
import Vendas from './app/Vendas';
import Estoque from './app/Estoque';
import Metas from './app/Metas';
import Saídas from './app/Saídas';
import Index from './app/index'; // Remova a importação duplicada

enableScreens();

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Navegação em pilha para a aba "Home"
function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Index" 
        component={Index} 
        options={{ title: 'Tela Inicial' }} 
      />
      <Stack.Screen 
        name="Entradas" 
        component={Entradas} 
        options={{ title: 'Entradas' }} 
      />
      <Stack.Screen 
        name="Saídas" 
        component={Saídas} 
        options={{ title: 'Saídas' }} 
      />
      <Stack.Screen 
        name="Estoque" 
        component={Estoque} 
        options={{ title: 'Estoque' }} 
      />
      <Stack.Screen 
        name="Metas" 
        component={Metas} 
        options={{ title: 'Metas' }} 
      />
      <Stack.Screen 
        name="Vendas" 
        component={Vendas} 
        options={{ title: 'Vendas' }} 
      />
    </Stack.Navigator>
  );
}



// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ color, size }) => {
//             let iconName;
//             if (route.name === 'Home') {
//               iconName = 'home';
//             } else if (route.name === 'Estoque') {
//               iconName = 'cube';
//             } else if (route.name === 'Vendas') {
//               iconName = 'cart';
//             }
//             return <Ionicons name={iconName} size={size} color={color} />;
//           },
//           tabBarActiveTintColor: '#FF6347', // Cor dos ícones ativos
//           tabBarInactiveTintColor: '#808080', // Cor dos ícones inativos
//           tabBarStyle: { 
//           backgroundColor: '#f8f8f8', // Cor de fundo da barra de abas
//           borderTopWidth: 0, // Remover a borda superior
//           },
//           tabBarLabelStyle: {
//           fontSize: 12, // Tamanho da fonte das labels
//           fontWeight: 'bold', // Peso da fonte das labels
//         },
//         })}
//       >
//         <Tab.Screen name="Home" component={HomeStack} /> {/* Usando a pilha HomeStack */}
//         <Tab.Screen name="Estoque" component={Estoque} />
//         <Tab.Screen name="Vendas" component={Vendas} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }
