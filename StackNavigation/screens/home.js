import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a la pantalla principal</Text>

      <Pressable 
        style={[styles.button, styles.buttonProfile]} 
        onPress={() => navigation.navigate('Profile')}
      >
        <Text style={styles.buttonText}>Ir a Perfil</Text>
      </Pressable>

      <Pressable 
        style={[styles.button, styles.buttonSettings]} 
        onPress={() => navigation.navigate('Settings')}
      >
        <Text style={styles.buttonText}>Ir a Configuración</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0c0c0cff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
    color: "white",
    fontStyle: "italic"
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginBottom: 20,
    width: '80%',
    alignItems: 'center',
  },
  buttonProfile: {
    backgroundColor: '#007bff',
  },
  buttonSettings: {
    backgroundColor: '#ff8808',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});