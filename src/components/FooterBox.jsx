import { StyleSheet, View } from "react-native";
import Text from "./Text";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});

const FooterBox = ({ label, value }) => {
  const formattedValue = (value) => {
    if (value >= 1000) {
      return Math.round(value / 100) / 10 + "k";
    }

    return value;
  };

  return (
    <View style={styles.container}>
      <Text bold heading>
        {formattedValue(value)}
      </Text>
      <Text secondary>{label}</Text>
    </View>
  );
};

export default FooterBox;
