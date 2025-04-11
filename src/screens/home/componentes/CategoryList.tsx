import { ScrollView, StyleSheet } from "react-native";
import { CategoryBadge } from "./CategoryBadgeItem";

export function CategoryList() {
  const categories = [
    { isActive: true, nombre: "All Coffee" },
    { isActive: false, nombre: "Machiato" },
    { isActive: false, nombre: "Latte" },
    { isActive: false, nombre: "American" },
    { isActive: false, nombre: "Lungo" },
    { isActive: false, nombre: "Express" },
    { isActive: false, nombre: "Latte Machiato" },
  ];

  return (
    <ScrollView
      horizontal
      style={styles.scroll}
      contentContainerStyle={styles.scrollContainer}
    >
      {categories.map((category) => (
        <CategoryBadge key={category.nombre} active={category.isActive}>
          {category.nombre}
        </CategoryBadge>
      ))}
    </ScrollView>
  );
}

//------------------
// Styles
//------------------
const styles = StyleSheet.create({
  scroll: { height: 50 },
  scrollContainer: { gap: 10 },
});
