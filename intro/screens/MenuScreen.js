import { Text, StyleSheet, View } from "react-native";
import { useState } from "react";
import ContadorScreen from "./ContadorScreen";
import BotonesScreen from "./BotonesScreen";
import TextScreen from "./TextScreen";
import ImgBackSplashScreen from "./ImgBackSplashScreen";
import SimpleScrollView from "./ScrollView";
import Activity_Indicator from "./Activity_Indicator";
import FlatlistSectionList from "./FlatlistSectionList";
import ModalScreen from "./Modal";
import BottomSheet from "./BottomSheet";
import { Button } from "react-native";

export default function MenuScreen() {
  const [screen, setScreen] = useState("menu");
  switch (screen) {
    case "contador":
      return <ContadorScreen />;
    case "botones":
      return <BotonesScreen />;
    case "input":
      return <TextScreen />;
    case "imageBack":
      return <ImgBackSplashScreen />;
    case "scroll":
      return <SimpleScrollView />;
    case "activity":
      return <Activity_Indicator />;
    case "flatlist":
      return <FlatlistSectionList />;
    case "modal":
      return <ModalScreen />;
    case "bottom":
      return <BottomSheet />;
    default:
      return (
        <View style={styles.container}>
          <Text>Menú Practicas</Text>
          <Button
            onPress={() => setScreen("contador")}
            title="Pract:Contador"
          />
          <Button
            onPress={() => setScreen("botones")}
            title="Pract:Botones & Switch"
          />
          <Button
            onPress={() => setScreen("input")}
            title="Pract:Input & Alert"
          />
          <Button
            onPress={() => setScreen("imageBack")}
            title="Pract:ImageBackground & SplashScreen"
          />
          <Button
            onPress={() => setScreen("scroll")}
            title="Pract:ScrollView"
          />
          <Button
            onPress={() => setScreen("activity")}
            title="Pract:ActivityIndicator"
          />
          <Button
            onPress={() => setScreen("flatlist")}
            title="Pract:Flatlist y Section List"
          />
          <Button onPress={() => setScreen("modal")} title="Pract:Modal" />
          <Button
            onPress={() => setScreen("bottom")}
            title="Pract:Bottom sheet"
          />
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
});
