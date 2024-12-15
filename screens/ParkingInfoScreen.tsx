import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function ParkingInfoScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/parking.jpeg')} // Asegúrate de que la imagen esté en la carpeta assets
        style={styles.image}
        resizeMode="cover" // Ajusta la imagen para que ocupe toda la pantalla
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%', // Ancho completo de la pantalla
    height: '100%', // Altura completa de la pantalla
  },
});
