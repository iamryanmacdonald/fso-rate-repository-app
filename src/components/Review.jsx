import { Formik } from "formik";
import { Pressable, StyleSheet, View } from "react-native";
import * as yup from "yup";

import FormikTextInput from "./FormikTextInput";
import Text from "./Text";
import theme from "../theme";
import useCreateReview from "../hooks/useCreateReview";

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

const ReviewForm = ({ onSubmit }) => {
  return (
    <>
      <FormikTextInput name="ownerName" placeholder="Repository owner name" />
      <FormikTextInput name="repositoryName" placeholder="Repository name" />
      <FormikTextInput name="rating" placeholder="Rating between 0 and 100" />
      <FormikTextInput name="text" placeholder="Review" />
      <Pressable style={styles.button} onPress={onSubmit}>
        <Text style={styles.buttonText} subheading bold>
          Create a review
        </Text>
      </Pressable>
    </>
  );
};

const initialValues = {
  ownerName: "",
  repositoryName: "",
  rating: "",
  text: "",
};

const validationSchema = yup.object().shape({
  ownerName: yup.string().required("Repository owner name is required"),
  repositoryName: yup.string().required("Repository name is required"),
  rating: yup
    .number()
    .required("Rating is required")
    .min(1, "Rating must be between 1 and 100")
    .max(100, "Rating must be between 1 and 100")
    .integer("Rating must be an integer"),
  text: yup.string(),
});

const Review = () => {
  const [createReview] = useCreateReview();

  const onSubmit = async (values) => {
    try {
      await createReview(values);
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
        {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

export default Review;
