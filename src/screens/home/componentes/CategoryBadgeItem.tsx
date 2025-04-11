import { PropsWithChildren } from "react";
import { StyleSheet, Text, View } from "react-native";

type TCategoryBadgeProps = PropsWithChildren<{ active?: boolean }>;
export function CategoryBadge({
  active = false,
  children,
}: TCategoryBadgeProps) {
  const backgroundColor = active ? "#c67c4e" : "lightgrey";
  const textColor = { color: active ? "white" : "black" };

  return (
    <View style={[styles.badgeContainer, { backgroundColor: backgroundColor }]}>
      <Text style={textColor}>{children}</Text>
    </View>
  );
}

//------------------
// Styles
//------------------
const styles = StyleSheet.create({
  badgeContainer: {
    padding: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
