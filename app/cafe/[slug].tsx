import { ROUTES } from "@/src/navigation/routes";
import { Link, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

type TRouteParams = { slug: string };
export default function CafeSlugRoute() {
  const { slug } = useLocalSearchParams<TRouteParams>();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 40 }}>CAFE</Text>
      <Link href={ROUTES.CATEGORIA}>{slug}</Link>
    </View>
  );
}
