import { StyleSheet, View } from "react-native";

import Text from "./Text";
import { formattedValue } from "../utils/misc";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});

const FooterBox = ({ label, testID, value }) => {
  return (
    <View style={styles.container}>
      <Text bold heading testID={testID}>
        {formattedValue(value)}
      </Text>
      <Text secondary>{label}</Text>
    </View>
  );
};

export default FooterBox;
