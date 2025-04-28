import { Footer } from "@/src/components/Footer";
import { ROUTES } from "@/src/navigation/routes";
import { Stack } from "expo-router";
import { usePathname } from "expo-router/build/hooks";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  const pathname = usePathname();

  const showFooter = pathname !== ROUTES.CATEGORIA && pathname !== ROUTES.CAFE;

  return (
    <View style={{ flex: 1 }}>
      <Stack
        screenOptions={{
          headerShown: false,
          headerBackButtonDisplayMode: "minimal",
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen name="cafe/[slug]" options={{ headerShown: true }} />
      </Stack>
      {showFooter ? <Footer /> : null}
    </View>
  );
}
