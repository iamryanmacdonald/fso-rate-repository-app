import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-native";

import { CREATE_REVIEW } from "../graphql/mutations";

const useCreateReview = () => {
  const [mutate, result] = useMutation(CREATE_REVIEW);
  const navigate = useNavigate();

  const createReview = async (values) => {
    values = {
      ...values,
      rating: parseInt(values.rating),
    };

    try {
      const { data } = await mutate({ variables: values });

      console.log(data);

      navigate(`/repository/${data.createReview.repositoryId}`);
    } catch (e) {
      console.log(e);

      throw e;
    }
  };

  return [createReview, result];
};

export default useCreateReview;
