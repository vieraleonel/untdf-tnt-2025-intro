import { Stack, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function CategoriaSlugRoute() {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Stack.Screen options={{ headerShown: true }} />
      <Text style={{ fontSize: 40 }}>{slug}</Text>
    </View>
  );
}
