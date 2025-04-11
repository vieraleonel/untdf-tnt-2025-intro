import { FlatList, StyleSheet } from "react-native";
import { CoffeeCard } from "./CoffeeCard";

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
        <CoffeeCard
          name={item.name}
          image={item.image}
          category={item.category}
          prettyPrice={item.prettyPrice}
          rate={item.rate}
        />
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
