import { FlatList, StyleSheet } from "react-native";
import { CoffeeCard } from "./CoffeeCard";
import { Link } from "expo-router";
import { ROUTES } from "@/src/navigation/routes";

export function CoffeeList() {
  const coffeeItems = [
    {
      name: "Flat White",
      category: "Espresso",
      prettyPrice: "$ 3,53",
      rate: 4.8,
      image: "https://place-hold.it/170x150",
    },
    {
      name: "Machiato",
      category: "Espresso",
      prettyPrice: "$ 3,53",
      rate: 4.8,
      image: "https://place-hold.it/170x150",
    },
    {
      name: "Latte",
      category: "Espresso",
      prettyPrice: "$ 3,53",
      rate: 4.8,
      image: "https://place-hold.it/170x150",
    },
    {
      name: "American",
      category: "Espresso",
      prettyPrice: "$ 3,53",
      rate: 4.8,
      image: "https://place-hold.it/170x150",
    },
  ];

  return (
    <FlatList
      data={coffeeItems}
      renderItem={({ item }) => (
        <Link
          href={ROUTES.CAFE}
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
      keyExtractor={(item) => item.name}
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
