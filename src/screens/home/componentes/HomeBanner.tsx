import { ImageBackground } from "expo-image";
import { StyleSheet, Text } from "react-native";

export function HomeBanner() {
  return (
    <ImageBackground
      source="https://place-hold.it/210x100"
      style={styles.bannerBackground}
    >
      <Text style={styles.bannerPromo}>Promo</Text>
      <Text style={styles.bannerText}>Buy one get</Text>
      <Text style={styles.bannerText}>on FREE</Text>
    </ImageBackground>
  );
}

//------------------
// Styles
//------------------

const styles = StyleSheet.create({
  bannerBackground: {
    backgroundColor: "rgba(0,0,0,0.9)",
    alignSelf: "center",
    width: "80%",
    height: 120,
    marginTop: -40,
    borderRadius: 10,
    overflow: "hidden",
    padding: 20,
    gap: 5,
  },
  bannerPromo: {
    backgroundColor: "#ed5151",
    alignSelf: "flex-start",
    padding: 5,
    borderRadius: 5,
    color: "white",
    fontWeight: "bold",
  },
  bannerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
