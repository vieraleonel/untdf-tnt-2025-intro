import { StyleSheet, View } from "react-native";
import { HomeHeader } from "./componentes/HomeHeader";
import { HomeBanner } from "./componentes/HomeBanner";
import { CategoryList } from "./componentes/CategoryList";
import { CoffeeList } from "./componentes/CoffeeList";

export function HomeScreen() {
  return (
    <View style={styles.screenContainer}>
      <HomeHeader />
      <HomeBanner />
      <View style={styles.separator} />
      <CategoryList />
      <CoffeeList />
    </View>
  );
}

//------------------
// Styles
//------------------

const styles = StyleSheet.create({
  screenContainer: { flex: 1, backgroundColor: "lightgreen" },
  separator: { height: 20 },
});
