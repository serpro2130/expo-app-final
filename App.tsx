import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Importar la librería de íconos
import HomeScreen from './screens/HomeScreen';
import ContactScreen from './screens/ContactScreen';
import ParkingInfoScreen from './screens/ParkingInfoScreen';
import TarifarioScreen from './screens/TarifarioScreen';
import { View, Image, StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.header}>
        <Image
          source={require('./assets/logo.png')} // Reemplaza con tu logo
          style={styles.logo}
        />
      </View>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: string = '';

            if (route.name === 'Inicio') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Contacto') {
              iconName = focused ? 'call' : 'call-outline';
            } else if (route.name === 'Parqueaderos') {
              iconName = focused ? 'car' : 'car-outline';
            } else if (route.name === 'Tarifario') {
              iconName = focused ? 'cash' : 'cash-outline';
            } else {
              iconName = 'help'; // Icono por defecto si no coincide con ninguna ruta
            }


            // Retornar el ícono
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#4CAF50', // Color del ícono activo
          tabBarInactiveTintColor: 'gray', // Color del ícono inactivo
          tabBarStyle: { backgroundColor: '#f0f0f0' }, // Estilo de la barra
        })}
      >
        <Tab.Screen name="Inicio" component={HomeScreen} />
        <Tab.Screen name="Contacto" component={ContactScreen} />
        <Tab.Screen name="Parqueaderos" component={ParkingInfoScreen} />
        <Tab.Screen name="Tarifario" component={TarifarioScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: '#000080',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 40,
  },
});
