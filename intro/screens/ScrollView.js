import { ScrollView, Text, View } from "react-native-web";

const DATA = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
  { id: 10 },
];

const SimpleHeader = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default function SimpleScrollView() {
  return (
    <View style={styles.mainContainer}>
      {/* Izquierda: scroll vertical */}
      <View style={styles.container}>
        <SimpleHeader title="Scroll Vertical" />
        <ScrollView showsVerticalScrollIndicator={true}>
          {DATA.map((val) => (
            <View style={styles.card} key={val.id}>
              <Text style={styles.subtitle}>¡Soy una tarjeta {val.id}!</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Derecha: scroll horizontal */}
      <View style={styles.container}>
        <SimpleHeader title="Scroll Horizontal" />
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={true}
          contentContainerStyle={styles.scrollContent}
        >
          {DATA.map((val) => (
            <View style={[styles.card, styles.cardHorizontal]} key={val.id}>
              <Text style={styles.subtitle}>Tarjeta {val.id}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    width: "100%",
    height: "100vh",
  },
  container: {
    width: "50%",
    height: "100%",
    borderRightWidth: 1,
    borderColor: "#ccc",
  },
  header: {
    height: 100,
    backgroundColor: "#181D31",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
  card: {
    height: 100,
    backgroundColor: "#E6DDC4",
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  cardHorizontal: {
    width: 200,
  },
  subtitle: {
    color: "#181D31",
    fontWeight: "bold",
  },
  scrollContent: {
    alignItems: "center",
    paddingHorizontal: 10,
  },
});
