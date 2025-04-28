import { FlatList, StyleSheet } from "react-native";
import { CoffeeCard } from "./CoffeeCard";
import { Link } from "expo-router";
import { ROUTES } from "@/src/navigation/routes";
import { coffeeItems } from "@/src/data/coffe";

export function CoffeeList() {
  return (
    <FlatList
      data={coffeeItems}
      renderItem={({ item }) => (
        <Link
          href={`${ROUTES.CAFE}${item.slug}`}
          style={{
            backgroundColor: "white",
            borderRadius: 20,
            width: "45%",
            padding: 10,
            gap: 10,
          }}
        >
          <CoffeeCard {...item} />
        </Link>
      )}
      keyExtractor={(item) => item.slug}
      numColumns={2}
      contentContainerStyle={styles.contentSeparator}
      columnWrapperStyle={styles.contentSeparator}
    />
  );
}

//------------------
// Styles
//------------------
const styles = StyleSheet.create({
  contentSeparator: { justifyContent: "center", gap: 10 },
});

//------------------
// EJEMPLO CON SCROLLVIEW
//------------------

// return (
//   <ScrollView
//     contentContainerStyle={{
//       flexDirection: "row",
//       flexWrap: "wrap",
//       gap: 20,
//       justifyContent: "center",
//       paddingVertical: 20,
//     }}
//   >
//     {coffeeItems.map((item) => (
//       <CoffeeCard key={item} />
//     ))}
//   </ScrollView>
// );
