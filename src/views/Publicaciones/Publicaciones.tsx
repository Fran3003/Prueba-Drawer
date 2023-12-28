import React from "react";
import { View, Text, Button } from "react-native";
import { RootStackParams } from "../../types";
import { StackScreenProps } from "@react-navigation/stack";

type PublicacionesProps = StackScreenProps<RootStackParams, "Publicaciones">;

const Publicaciones: React.FC<PublicacionesProps> = ({ navigation }) => {
  const goToPosts = () => {
    navigation.navigate("Posts");
  };
  const goToNewsletter = () => {
    navigation.navigate("Newsletter");
  };
  const goToNoticias = () => {
    navigation.navigate("Noticias");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: 'black' }}>
      <Text style={{ fontSize: 20 }}>Publicaciones!</Text>
      <Button title="Ir a Posts" onPress={goToPosts} />
      <Button title="Ir a Newsletter" onPress={goToNewsletter} />
      <Button title="Ir a Noticias" onPress={goToNoticias} />
    </View>
  );
};

export default Publicaciones;