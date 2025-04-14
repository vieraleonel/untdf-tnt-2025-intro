import { Octicons } from "@expo/vector-icons";
import { ImageBackground } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

type TCoffeeCardProps = {
  name: string;
  category: string;
  prettyPrice: string;
  rate: number;
  image: string;
};
export function CoffeeCard({
  name,
  category,
  prettyPrice,
  rate,
  image,
}: TCoffeeCardProps) {
  return (
    <View style={styles.card}>
      <ImageBackground style={styles.imageBackground} source={image}>
        <View style={styles.ratingContainer}>
          <Octicons name="star-fill" size={10} color="#f7be21" />
          <Text style={styles.ratingText}>{rate}</Text>
        </View>
      </ImageBackground>
      <View>
        <Text style={styles.titleText}>{name}</Text>
        <Text style={styles.categoryText}>{category}</Text>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.priceText}>{prettyPrice}</Text>
        <Octicons
          name="plus"
          size={16}
          color="white"
          style={styles.addButton}
        />
      </View>
    </View>
  );
}

//------------------
// Styles
//------------------
const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    // borderRadius: 20,
    // width: "45%",
    // padding: 10,
    // gap: 10,
  },
  imageBackground: {
    backgroundColor: "lightgray",
    borderRadius: 20,
    overflow: "hidden",
    height: 150,
    flexDirection: "row-reverse",
  },
  ratingContainer: {
    flexDirection: "row",
    gap: 6,
    backgroundColor: "rgba(0,0,0,0.2)",
    borderBottomLeftRadius: 20,
    paddingHorizontal: 10,
    alignItems: "center",
    maxHeight: 26,
  },
  ratingText: {
    color: "white",
    fontSize: 10,
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 18,
  },
  categoryText: {
    color: "grey",
    fontSize: 12,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  priceText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  addButton: {
    backgroundColor: "#c67c4e",
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 10,
  },
});
