import { StyleSheet, TextInput as NativeTextInput } from "react-native";

import theme from "../theme";

const styles = StyleSheet.create({
  input: {
    borderColor: theme.colors.textSecondary,
    borderRadius: 5,
    borderStyle: "solid",
    borderWidth: 1,
    height: 40,
    marginTop: 15,
    paddingHorizontal: 10,
  },
  error: {
    borderColor: theme.colors.error,
  },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [styles.input, error && styles.error, style];

  return (
    <NativeTextInput
      style={textInputStyle}
      placeholderTextColor={theme.colors.background}
      {...props}
    />
  );
};

export default TextInput;
