import { Formik } from "formik";
import { Pressable, StyleSheet, View } from "react-native";
import theme from "../theme";

import FormikTextInput from "./FormikTextInput";
import Text from "./Text";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    padding: 20,
  },
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    height: 40,
  },
  buttonText: {
    color: "#ffffff",
    height: "100%",
    lineHeight: 40,
    textAlign: "center",
  },
});

const SignInForm = ({ onSubmit }) => {
  return (
    <>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry />
      <Pressable style={styles.button} onPress={onSubmit}>
        <Text style={styles.buttonText} subheading bold>
          Sign In
        </Text>
      </Pressable>
    </>
  );
};

const initialValues = {
  username: "",
  password: "",
};

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <View style={styles.container}>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

export default SignIn;
