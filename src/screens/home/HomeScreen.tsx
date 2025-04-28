import { StatusBar, StyleSheet, Text, View } from "react-native";
import { HomeHeader } from "./componentes/HomeHeader";
import { HomeBanner } from "./componentes/HomeBanner";
import { CategoryList } from "./componentes/CategoryList";
import { CoffeeList } from "./componentes/CoffeeList";
import { TextPressStart2P } from "./componentes/TextPressStart2P";

export function HomeScreen() {
  return (
    <View style={styles.screenContainer}>
      <StatusBar backgroundColor="rgba(0,0,0,0.9)" barStyle="light-content" />
      <HomeHeader />
      <HomeBanner />
      <TextPressStart2P>HOLA REGULAR</TextPressStart2P>
      <TextPressStart2P style={{ fontSize: 40 }}>HOLA BOLD</TextPressStart2P>
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
