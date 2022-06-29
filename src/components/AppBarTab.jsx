import { Pressable } from "react-native";

import Text from "./Text";

const AppBarTab = ({ children }) => {
  return (
    <Pressable>
      <Text primary subheading bold style={{ color: "#ffffff" }}>
        {children}
      </Text>
    </Pressable>
  );
};

export default AppBarTab;
