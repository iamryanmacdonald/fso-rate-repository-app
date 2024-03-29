import { Pressable, StyleSheet } from "react-native";
import { Link } from "react-router-native";

import Text from "./Text";

const styles = StyleSheet.create({
  container: {
    marginRight: 20,
  },
});

const AppBarTab = ({ children, link, onPress }) => {
  return (
    <Pressable style={styles.container}>
      <Link to={link || ""} onPress={onPress}>
        <Text primary subheading bold style={{ color: "#fff" }}>
          {children}
        </Text>
      </Link>
    </Pressable>
  );
};

export default AppBarTab;
