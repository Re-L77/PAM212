import {
  Text,
  StyleSheet,
  View,
  Button,
  ActivityIndicator,
} from "react-native";
import { useState } from "react";
export default function Activity_Indicator() {
  const [cargando, setCargando] = useState(false);
  const iniciarCarga = () => {
    setCargando(true);
    setTimeout(() => {
      setCargando(false);
    }, 3000);
  };
  const detenerCarga = () => {
    setCargando(false);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Práctica Activity Indicator </Text>
      <View style={styles.button}>
        <Button
          color="green"
          title={cargando ? "Cargando..." : "Iniciar Carga"}
          onPress={iniciarCarga}
        ></Button>
      </View>

      <View style={styles.button}>
        <Button
          color="red"
          title="Detener Carga"
          onPress={detenerCarga}
        ></Button>
      </View>
      <View style={styles.loading}>
        <ActivityIndicator
          size={"large"}
          color={"black"}
          hidesWhenStopped={true}
          animating={cargando}
        ></ActivityIndicator>
      </View>
      <Text style={styles.textLoading}>
        {cargando ? "Cargando Datos" : "Presiona el botón verde :V"}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#000000ff",
    fontSize: 30,
    fontFamily: "Times New Roman",
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    width: 220,
    marginBottom: 16,
  },
  loading: {
    alignItems: "center",
    marginTop: 20,
  },
  textLoading: {
    marginTop: 12,
    fontSize: 16,
    color: "#000000",
  },
});
