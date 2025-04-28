import { ScrollView, StyleSheet } from "react-native";
import { CategoryBadge } from "./CategoryBadgeItem";
import { useRouter } from "expo-router";
import { categoriesData } from "@/src/data/categories";
import { ROUTES } from "@/src/navigation/routes";

export function CategoryList() {
  const router = useRouter();

  function handleCategoryPress(category: string) {
    // function navegar() {
    //   return router.push(`${ROUTES.CATEGORIA}${category}`);
    // }
    // return navegar;
    //----------
    // return function () {
    //   return router.push(`${ROUTES.CATEGORIA}${category}`);
    // }
    //----------
    // return () => {
    //   return router.push(`${ROUTES.CATEGORIA}${category}`);
    // }
    //----------
    return () => router.push(`${ROUTES.CATEGORIA}${category}`);
  }

  const handleCategoryPressAsConst = (category: string) => () =>
    router.push(`${ROUTES.CATEGORIA}${category}`);
  //----------
  // const handleCategoryPressAsConst = (category: string) =>
  //   function () {
  //     router.push(`${ROUTES.CATEGORIA}${category}`);
  //   };
  //----------
  // const handleCategoryPressAsConst = function (category: string) {
  //   return function () {
  //     router.push(`${ROUTES.CATEGORIA}${category}`);
  //   };
  // };

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
          // onPress={() => router.push(`${ROUTES.CATEGORIA}${category.slug}`)}
          // ------
          // onPress={() => {
          //   return router.push(`${ROUTES.CATEGORIA}${category.slug}`);
          // }}
          // ------
          // onPress={function () {
          //   return router.push(`${ROUTES.CATEGORIA}${category.slug}`);
          // }}
          // ------
          onPress={handleCategoryPressAsConst(category.slug)}
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
