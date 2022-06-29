import { StyleSheet, View } from "react-native";

import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 5,
  },
  text: {
    backgroundColor: theme.colors.primary,
    color: "#ffffff",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});

const Label = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text heading style={styles.text}>
        {children}
      </Text>
    </View>
  );
};

export default Label;
