import { FontAwesome6, Octicons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import {
  Platform,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { ROUTES } from "@/src/navigation/routes";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function Footer() {
  const { bottom } = useSafeAreaInsets();
  const paddingBottom = Platform.OS === "ios" ? bottom : null;

  const router = useRouter();

  function handleOnPressFavoritos() {
    router.push(ROUTES.FAVORITOS);
  }

  function handleOnPressMisCompras() {
    router.push("/mis-compras");
  }

  function handleOnNotificaciones() {
    router.push("/notificaciones");
  }

  return (
    <View style={[styles.footerContainer, { paddingBottom: paddingBottom }]}>
      <Link href={ROUTES.HOME} style={{ padding: 10 }}>
        <Octicons name="home" size={24} color="#c67c4e" />
      </Link>
      <TouchableOpacity
        onPress={handleOnPressFavoritos}
        style={{ padding: 10 }}
      >
        <Octicons name="heart" size={24} color="gray" />
      </TouchableOpacity>
      <FontAwesome6
        name="bag-shopping"
        size={24}
        color="gray"
        style={{ padding: 10 }}
        onPress={handleOnPressMisCompras}
      />
      <Pressable onPressIn={handleOnNotificaciones} style={{ padding: 10 }}>
        <Octicons name="bell" size={24} color="gray" />
      </Pressable>
    </View>
  );
}

//------------------
// Styles
//------------------
const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
});
