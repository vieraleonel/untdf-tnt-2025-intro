import { useState } from "react";
import { Button, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface StateScreenProps {
  fondoInicial: string;
}
export function StateScreen({ fondoInicial }: StateScreenProps) {
  // let color = "red";

  const [fondo, setFondo] = useState<string>(fondoInicial);
  const [fondo2, setFondo2] = useState<string>(fondoInicial);

  // Lo de arriba equivale a:
  // const stateArray = useState<string>("red");
  // const fondo = stateArray[0];
  // const setFondo = stateArray[1];

  // const stateArray = useState<string>("red");

  const handleColorRojoPress = () => {
    // color = "red";
    setFondo(function (prevState) {
      setFondo2(prevState);
      return "red";
    });
    // stateArray[1]("red");
    console.log("Color Rojo");
  };

  const handleColorVerdePress = () => {
    // color = "green";
    setFondo(function (prevState) {
      setFondo2(prevState);
      return prevState === "red" ? "green" : "purple";
    });
    // stateArray[1]("green");
    console.log("Color Verde");
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 10,
      }}
    >
      <Button title="Color Rojo" onPress={handleColorRojoPress} />
      <Button title="Color Verde" onPress={handleColorVerdePress} />
      <View style={{ height: 100, width: 100, backgroundColor: fondo }} />
      <View style={{ height: 100, width: 100, backgroundColor: fondo2 }} />
    </SafeAreaView>
  );
}
