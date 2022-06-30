import { Formik } from "formik";
import { Pressable, StyleSheet, View } from "react-native";
import { useNavigate } from "react-router-native";
import * as yup from "yup";

import FormikTextInput from "./FormikTextInput";
import Text from "./Text";
import theme from "../theme";
import useSignIn from "../hooks/useSignIn";
import useSignUp from "../hooks/useSignUp";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    padding: 20,
    paddingTop: 5,
  },
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    height: 40,
    marginTop: 15,
  },
  buttonText: {
    color: "#ffffff",
    height: "100%",
    lineHeight: 40,
    textAlign: "center",
  },
});

const SignUpForm = ({ onSubmit }) => {
  return (
    <>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry />
      <FormikTextInput
        name="confirmPassword"
        placeholder="Confirm password"
        secureTextEntry
      />
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
  confirmPassword: "",
};

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
  confirmPassword: yup
    .string()
    .required("Password confirmation required")
    .oneOf([yup.ref("password")], "Passwords must match"),
});

const SignUp = () => {
  const [signUp] = useSignUp();
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    try {
      await signUp(values);
      await signIn(values);

      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

export default SignUp;
