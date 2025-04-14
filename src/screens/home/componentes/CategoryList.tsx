import { ScrollView, StyleSheet } from "react-native";
import { CategoryBadge } from "./CategoryBadgeItem";
import { ROUTES } from "@/src/navigation/routes";
import { useRouter } from "expo-router";

export function CategoryList() {
  const router = useRouter();

  const categories = [
    { isActive: true, nombre: "All Coffee" },
    { isActive: false, nombre: "Machiato" },
    { isActive: false, nombre: "Latte" },
    { isActive: false, nombre: "American" },
    { isActive: false, nombre: "Lungo" },
    { isActive: false, nombre: "Express" },
    { isActive: false, nombre: "Latte Machiato" },
  ];

  function handleOnPressCategoria() {
    router.push(ROUTES.CATEGORIA);
  }

  return (
    <ScrollView
      horizontal
      style={styles.scroll}
      contentContainerStyle={styles.scrollContainer}
    >
      {categories.map((category) => (
        <CategoryBadge
          key={category.nombre}
          active={category.isActive}
          onPress={handleOnPressCategoria}
        >
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
