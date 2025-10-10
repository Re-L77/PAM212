// Import: Zona de declaraciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import { useState } from 'react';
// Main: Zona de componentes
export default function App() {
  const [contador, setContador] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.textoBlanco}>Contador: {contador}</Text>
      <View style={styles.buttons}>
        <Button title='Agregar' onPress={()=>setContador(contador+1)}></Button>
        <Button title='Quitar' onPress={()=>setContador(contador-1)}></Button>
        <Button title='Reinicar' onPress={()=>setContador(0)}></Button>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

// Estilo: Zona de estética y posicionamiento
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000ff',
    alignItems: 'center',
    justifyContent: 'center', 
  },
  textoBlanco: {
    color: "white",
    fontSize: 40,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    marginTop: 20,
  }
});
