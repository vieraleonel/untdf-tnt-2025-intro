import { EvilIcons, SimpleLineIcons } from "@expo/vector-icons";
import { StyleSheet, Text, TextInput, View } from "react-native";

export function HomeHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.locationLabel}>Location</Text>
      <View style={styles.locationContainer}>
        <Text style={styles.locationText}>Ushuaia, Tierra del Fuego</Text>
        <EvilIcons name="chevron-down" size={24} color="white" />
      </View>
      <View style={styles.spacer} />
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <EvilIcons name="search" size={24} color="white" />
          <TextInput
            style={styles.searchInput}
            placeholderTextColor="grey"
            placeholder="Search coffee"
          />
        </View>
        <SimpleLineIcons
          name="equalizer"
          size={24}
          color="white"
          style={styles.filterButton}
        />
      </View>
    </View>
  );
}

//------------------
// Styles
//------------------
const styles = StyleSheet.create({
  container: {
    height: 200,
    backgroundColor: "#222222",
    padding: 20,
    gap: 10,
  },
  locationLabel: {
    color: "gray",
  },
  locationContainer: {
    flexDirection: "row",
    gap: 10,
  },
  locationText: {
    color: "white",
  },
  spacer: {
    height: 5,
  },
  searchContainer: {
    flexDirection: "row",
    gap: 20,
  },
  searchInputContainer: {
    flexDirection: "row",
    gap: 10,
    backgroundColor: "#2a2a2a",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    flex: 1,
    borderRadius: 10,
  },
  searchInput: {
    color: "white",
    flex: 1,
    height: "100%",
  },
  filterButton: {
    backgroundColor: "#c67c4e",
    padding: 10,
    borderRadius: 10,
    transform: [{ rotate: "90deg" }],
  },
});
