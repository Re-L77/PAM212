import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import img1 from "./assets/1.png";
import img2 from "./assets/2.png";
import img3 from "./assets/3.png";
import img4 from "./assets/4.png";
import img5 from "./assets/5.png";
import img6 from "./assets/6.png";

export default function App() {
  const blogData = [
    {
      title: "PRÓXIMOS EVENTOS",
      elements: [
        {
          id: 1,
          uri: img1,
          description: "Evento 1",
          fecha: "11-10-25",
        },
        {
          id: 2,
          uri: img2,
          description: "Evento 2",
          fecha: "12-10-25",
        },
      ],
    },
    {
      title: "NUEVAS CANCIONES",
      elements: [
        {
          id: 1,
          uri: img3,
          description: "Canción 1",
          fecha: "11-11-25",
        },
        {
          id: 2,
          uri: img4,
          description: "Canción 2",
          fecha: "11-12-25",
        },
      ],
    },
    {
      title: "NUEVAS COLABORACIONES:",
      elements: [
        {
          id: 1,
          uri: img5,
          description: "Nueva canción 1",
          fecha: "12-12-25",
        },
        {
          id: 2,
          uri: img6,
          description: "Nueva canción 2",
          fecha: "13-12-25",
        },
      ],
    },
  ];
  const mostarAlerta = (elemento) => {
    Alert.alert(`${elemento}`, `${elemento}`, [
      { text: "Compartir" },
      { text: "Guardar" },
      { text: "Cerrar" },
    ]);
    // alert(elemento);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>NightCord at 25 news</Text>
        <Text style={styles.headerDescription}>
          Blog de noticias sobre el grupo músical de crypton
        </Text>
      </View>
      <ScrollView contentContainerStyle={styles.scroll}>
        {blogData.map((element) => {
          return (
            <View style={styles.headers} key={element.title}>
              <Text style={styles.topics}>{element.title}</Text>
              {element.elements.map((description) => {
                return (
                  <View
                    style={styles.description}
                    key={`${element.title}-${description.id}`}
                  >
                    <Image style={styles.image} source={description.uri} />
                    <Text style={styles.descrip}>
                      {description.description}
                    </Text>
                    <Text style={styles.date}>{description.fecha}</Text>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => mostarAlerta(element.title)}
                    >
                      <Text style={styles.buttonText}>Leer más</Text>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    paddingVertical: 20,
    alignItems: "center",
    backgroundColor: "black",
  },
  headerTitle: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "",
  },
  headerDescription: {
    color: "white",
    paddingTop: 12,
    fontSize: 17,
    fontWeight: "light",
    fontStyle: "italic",
  },
  button: {
    backgroundColor: "#007BFF",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 30,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  scroll: {
    paddingHorizontal: 10,
    // backgroundColor: "rgba(0, 0, 0, .1)",
    height: "auto",
    margin: 15,
    borderRadius: 10,
  },
  headers: {
    marginBottom: 20,
    backgroundColor: "rgba(0, 0, 0, .1)",
    borderRadius: 10,
  },
  topics: {
    color: "#000000ff",
    fontSize: 25,
    fontWeight: "bold",
    borderBottomWidth: 3,
    paddingLeft: 10,
  },
  description: {
    marginBottom: 20,
  },
  descrip: {
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  date: {
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
});
