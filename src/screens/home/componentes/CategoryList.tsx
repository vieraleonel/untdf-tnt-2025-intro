import { ScrollView, StyleSheet } from "react-native";
import { CategoryBadge } from "./CategoryBadgeItem";
import { ROUTES } from "@/src/navigation/routes";
import { useRouter } from "expo-router";
import { categoriesData } from "@/src/data/categories";

export function CategoryList() {
  const router = useRouter();

  function handleOnPressCategoria() {
    router.push("/categorias/latte");
  }

  return (
    <ScrollView
      horizontal
      style={styles.scroll}
      contentContainerStyle={styles.scrollContainer}
    >
      {categoriesData.map((category) => (
        <CategoryBadge
          key={category.slug}
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
