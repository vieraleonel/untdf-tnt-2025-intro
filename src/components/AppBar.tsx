import { Entypo } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";

type TAppBarProps = { title: string };
export function AppBar({ title }: TAppBarProps) {
  const router = useRouter();

  return (
    <View>
      <Entypo name="arrow-left" size={24} color="black" onPress={router.back} />
    </View>
  );
}

//------------------
// Styles
//------------------
const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "white",
    padding: 20,
  },
});
