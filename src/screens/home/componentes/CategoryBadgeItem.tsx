import { PropsWithChildren } from "react";
import {
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  View,
} from "react-native";

type TCategoryBadgeProps = PropsWithChildren<{ active?: boolean }> &
  PressableProps;
export function CategoryBadge({
  active = false,
  children,
  ...pressableProps
}: TCategoryBadgeProps) {
  const backgroundColor = active ? "#c67c4e" : "lightgrey";
  const textColor = { color: active ? "white" : "black" };

  return (
    <Pressable {...pressableProps}>
      <View
        style={[styles.badgeContainer, { backgroundColor: backgroundColor }]}
      >
        <Text style={textColor}>{children}</Text>
      </View>
    </Pressable>
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
