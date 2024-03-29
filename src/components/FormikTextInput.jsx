import { useField } from "formik";
import { StyleSheet } from "react-native";

import Text from "./Text";
import TextInput from "./TextInput";
import theme from "../theme";

const styles = StyleSheet.create({
  errorText: {
    color: theme.colors.error,
    marginTop: 5,
  },
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <>
      <TextInput
        onChangeText={(value) => helpers.setValue(value)}
        onBlue={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;
