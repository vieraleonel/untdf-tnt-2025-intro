import { FontAwesome6, Octicons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";

export function Footer() {
  return (
    <View style={styles.footerContainer}>
      <Octicons name="home" size={24} color="#c67c4e" />
      <Octicons name="heart" size={24} color="gray" />
      <FontAwesome6 name="bag-shopping" size={24} color="gray" />
      <Octicons name="bell" size={24} color="gray" />
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
    padding: 20,
  },
});
