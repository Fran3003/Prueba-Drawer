import React from "react";
import { View, Text, Button } from "react-native";
import { RootStackParams } from "../../types";
import { StackScreenProps } from "@react-navigation/stack";

type CalendarioProps = StackScreenProps<RootStackParams, "Calendario">;

const Calendario: React.FC<CalendarioProps> = ({ navigation }) => {
  const goToEvento = () => {
    navigation.navigate("Evento");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: 'black' }}>
      <Text style={{ fontSize: 20 }}>Calendario!</Text>
      <Button title="Ir a Evento" onPress={goToEvento} />
    </View>
  );
};

export default Calendario;