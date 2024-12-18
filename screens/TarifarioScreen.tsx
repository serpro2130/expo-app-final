import React from 'react';
import { View, StyleSheet, Alert, ImageBackground, TouchableOpacity, Text } from 'react-native';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import { Asset } from 'expo-asset';

const TarifarioScreen = () => {
  const copyAndOpenPDF = async () => {
    try {
      // Obtener la URI del archivo PDF en assets
      const pdfAsset = Asset.fromModule(require('../assets/tarifario.pdf'));
      await pdfAsset.downloadAsync(); // Asegurarse de que esté disponible localmente

      const assetUri = pdfAsset.localUri;
      if (!assetUri) {
        throw new Error('No se pudo obtener la URI del PDF.');
      }

      // Definir la ruta de destino en el sistema de archivos
      const pdfUri = `${FileSystem.documentDirectory}tarifario.pdf`;

      // Copiar el archivo desde assets al directorio local
      await FileSystem.copyAsync({
        from: assetUri,
        to: pdfUri,
      });
      console.log('PDF copiado en:', pdfUri);

      // Verificar si se puede compartir
      if (await Sharing.isAvailableAsync()) {
        await Sharing.shareAsync(pdfUri);
      } else {
        Alert.alert('Error', 'No se puede abrir el archivo PDF en este dispositivo.');
      }
    } catch (error) {
      console.error('Error al abrir el PDF:', error);
      Alert.alert('Error', 'No se pudo descargar y abrir el archivo PDF.');
    }
  };

  return (
    <ImageBackground
      source={require('../assets/parking3.png')} // Imagen de fondo
      style={styles.background}
    >
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={copyAndOpenPDF}>
                <Text style={styles.buttonText}>Tarifario</Text>
            </TouchableOpacity>
            <Text style={styles.reminder}>Recuerde renovar su plan de acuerdo a su categoría el primer día de cada mes</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000080', // Color azul similar al logo
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    elevation: 3, // Sombra en Android
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  reminder: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFD700', // Amarillo brillante para destacar
    textShadowColor: 'rgba(0, 0, 0, 0.9)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
    marginTop: 10,
},
});

export default TarifarioScreen;
