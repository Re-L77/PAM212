import { Text, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import ContadorScreen from "./ContadorScreen";
import BotonesScreen from "./BotonesScreen";
import InputAlert from "./InputAlert";
import ImgBackSplashScreen from "./ImgBackSplashScreen";
import ScrollView from "./ScrollView";
import Activity_Indicator from "./Activity_Indicator";
import { Button } from "react-native-web";

export default function MenuScreen() {
  const [screen, setScreen] = useState("menu");
  switch (screen) {
    case "contador":
      return <ContadorScreen />;
    case "botones":
      return <BotonesScreen />;
    case "input":
      return <InputAlert />;
    case "imageBack":
      return <ImgBackSplashScreen />;
    case "scroll":
      return <ScrollView />;
    case "activity":
      return <Activity_Indicator />;
    case "flatlist":
      return <FlatlistSectionList />;
    case "modal":
      return <Modal />;
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
    margin: "10px",
  },
});
