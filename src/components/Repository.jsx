import { useQuery } from "@apollo/client";
import { useParams } from "react-router-native";
import { View } from "react-native";

import Text from "./Text";
import { GET_REPOSITORY } from "../graphql/queries";
import RepositoryItem from "./RepositoryItem";

const Repository = () => {
  const { id } = useParams();
  const { data, loading } = useQuery(GET_REPOSITORY, { variables: { id } });

  if (loading) {
    return (
      <View style={{ backgroundColor: "#ffffff", padding: 20 }}>
        <Text subheading bold>
          Loading...
        </Text>
      </View>
    );
  }

  return <RepositoryItem item={data.repository} single={true} />;
};

export default Repository;
