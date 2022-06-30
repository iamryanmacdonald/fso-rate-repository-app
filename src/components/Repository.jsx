import { useQuery } from "@apollo/client";
import { format, parseISO } from "date-fns";
import { useParams } from "react-router-native";
import { FlatList, StyleSheet, View } from "react-native";

import RepositoryItem from "./RepositoryItem";
import Text from "./Text";
import { GET_REPOSITORY } from "../graphql/queries";
import theme from "../theme";

const styles = StyleSheet.create({
  reviewList: {
    marginTop: 10,
  },
  reviewItem: {
    backgroundColor: "#ffffff",
    flexDirection: "row",
    padding: 20,
  },
  rating: {
    borderColor: theme.colors.primary,
    borderRadius: 25,
    borderWidth: 2,
    fontSize: 25,
    height: 50,
    lineHeight: 46,
    textAlign: "center",
    width: 50,
  },
  content: {
    flexDirection: "column",
    flexShrink: 1,
    marginHorizontal: 20,
  },
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const ReviewItem = ({ review }) => {
  const { createdAt, rating, text, user } = review;
  const { username } = user;

  return (
    <View style={styles.reviewItem}>
      <View>
        <Text style={styles.rating} primary bold>
          {rating}
        </Text>
      </View>
      <View style={styles.content}>
        <Text bold>{username}</Text>
        <Text secondary>{format(parseISO(createdAt), "dd.MM.yyyy")}</Text>
        <Text style={{ marginTop: 5 }}>{text}</Text>
      </View>
    </View>
  );
};

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

  const reviews = data.repository.reviews
    ? data.repository.reviews.edges.map((edge) => edge.node)
    : [];

  return (
    <>
      <RepositoryItem item={data.repository} single={true} />
      <FlatList
        data={reviews}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => <ReviewItem review={item} />}
        style={styles.reviewList}
      />
    </>
  );
};

export default Repository;
