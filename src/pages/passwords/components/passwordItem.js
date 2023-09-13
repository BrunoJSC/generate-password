import { View, Text, StyleSheet, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export function PasswordItem({
  data,
  removePassword,
  visible,
  toggleShowPassword,
}) {
  return (
    <Pressable
      onLongPress={removePassword}
      onPress={visible}
      style={styles.container}
    >
      <Text style={styles.text}>{visible === false ? data : "**********"}</Text>

      <MaterialCommunityIcons
        name={visible ? "eye-off" : "eye"}
        size={24}
        color="#fff"
        onPress={toggleShowPassword}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0e0e0e",
    padding: 14,
    width: "100%",
    marginBottom: 14,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  text: {
    color: "#fff",

    fontWeight: "bold",
  },
});
