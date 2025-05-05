import { useState } from "react";
import { Button, Switch, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function UserInputScreen() {
  const [texto, setTexto] = useState<string>("");
  const [isEnabled, setIsEnabled] = useState<boolean>(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const handleResetPress = () => {
    setTexto("");
  };

  return (
    <SafeAreaView style={{ flex: 1, gap: 10, alignItems: "center" }}>
      <TextInput
        style={{
          backgroundColor: "lightgrey",
          width: 200,
          height: 100,
          fontSize: 30,
        }}
        autoCapitalize="none"
        autoFocus
        value={texto}
        inputMode="decimal"
        keyboardType="decimal-pad"
        onChangeText={setTexto}
      />
      <Text style={{ fontSize: 20 }}>Valor de mi texto: {texto}</Text>
      <Button title="Resetear valor" onPress={handleResetPress} />

      <View style={{ height: 10, backgroundColor: "black" }} />

      <Switch
        trackColor={{ false: "red", true: "green" }}
        ios_backgroundColor="red"
        thumbColor={isEnabled ? "lightgreen" : "gray"}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </SafeAreaView>
  );
}
