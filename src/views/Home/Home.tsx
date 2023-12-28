import React from "react";
import { View, Text, Button } from "react-native";
import { RootStackParams } from "../../types";
import { StackScreenProps } from "@react-navigation/stack";

type HomeProps = StackScreenProps<RootStackParams, "Home">;

const Home: React.FC<HomeProps> = ({ navigation }) => {
  const goToNextGame = () => {
    navigation.navigate("Posts");
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: 'black' }}>
      <Text style={{ fontSize: 20 }}>Home!</Text>
      <Button title="Ir a Next Game" onPress={goToNextGame} />
    </View>
  );
};

export default Home;