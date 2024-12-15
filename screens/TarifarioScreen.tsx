import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

export default function ContactScreen() {
    return (

        <ImageBackground
            source={require('../assets/parking.jpeg')} // Ruta de la imagen
            style={styles.background}
        >
            <View style={styles.container}>
                <Text style={styles.title}>Tarifario</Text>
                <Text style={styles.details}>Tarifa 1: $20 mensuales</Text>
                <Text style={styles.details}>Tarifa 2: $30 mensuales</Text>
                <Text style={styles.details}>Tarifa 3: $40 mensuales</Text>
                <Text style={styles.reminder}>Recuerde renovar su plan de acuerdo a su categoría el primer día de cada mes</Text>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#FFFFFF', // Cambiar a blanco
        textShadowColor: 'rgba(0, 0, 0, 0.9)', // Sombra negra
        textShadowOffset: { width: 2, height: 2 }, // Desplazamiento de sombra
        textShadowRadius: 4, // Difuminado de la sombra
    },
    details: {
        fontSize: 16,
        textAlign: 'center',
        color: '#FFFFFF',
        textShadowColor: 'rgba(0, 0, 0, 0.9)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 4,
        marginVertical: 5,
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
