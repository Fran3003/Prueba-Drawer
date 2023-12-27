import React from "react";
import { View, Text, Button } from "react-native";
import { RootStackParams } from "../../types";
// import { useNavigation } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";

type GaleryProps = StackScreenProps<RootStackParams, "Perfil">;

const Galery: React.FC<GaleryProps> = ({ navigation }) => {
  const goToSettings = () => {
    navigation.navigate("Settings");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: 'black' }}>
      <Text style={{ fontSize: 20 }}>Galery!</Text>
      <Button title="Ir a Configuraciones" onPress={goToSettings} />
    </View>
  );
};

export default Galery;