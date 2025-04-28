import { Stack, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

type TRouteParams = { slug: string };
export default function CategoriaSlugRoute() {
  const { slug } = useLocalSearchParams<TRouteParams>();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Stack.Screen
        options={{
          headerShown: true,
          title: "Ficha de una categoría",
          headerTintColor: "red",
        }}
      />

      <Text style={{ fontSize: 40 }}>{slug}</Text>
    </View>
  );
}
