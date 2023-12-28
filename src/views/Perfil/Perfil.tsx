import React from "react";
import { View, Text, Button } from "react-native";
import { RootStackParams } from "../../types";
// import { useNavigation } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";

type PerfilProps = StackScreenProps<RootStackParams, "Perfil">;

const Perfil: React.FC<PerfilProps> = ({ navigation }) => {
  const goToSettings = () => {
    navigation.navigate("Settings");
  };
  const goToAbout = () => {
    navigation.navigate("About");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: 'black' }}>
      <Text style={{ fontSize: 20 }}>Perfil!</Text>
      <Button title="Ir a Configuraciones" onPress={goToSettings} />
      <Button title="Ir a About" onPress={goToAbout} />
    </View>
  );
};

export default Perfil;