import { Pressable } from "react-native";

import Text from "./Text";

const AppBarTab = ({ children }) => {
  return (
    <Pressable>
      <Text
        color="primary"
        fontSize="subheading"
        fontWeight="bold"
        style={{ color: "#FFFFFF" }}
      >
        {children}
      </Text>
    </Pressable>
  );
};

export default AppBarTab;
