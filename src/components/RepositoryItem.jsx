import { Image, StyleSheet, View } from "react-native";

import FooterBox from "./FooterBox";
import Label from "./Label";
import Text from "./Text";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    padding: 20,
  },
  header: {
    flexDirection: "row",
  },
  avatar: {
    borderRadius: 5,
    height: 75,
    width: 75,
  },
  description: {
    flex: 1,
    marginLeft: 20,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
});

const RepositoryItem = ({ item }) => {
  const {
    description,
    forksCount,
    fullName,
    language,
    ownerAvatarUrl,
    ratingAverage,
    reviewCount,
    stargazersCount,
  } = item;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.avatar} source={{ uri: ownerAvatarUrl }} />
        <View style={styles.description}>
          <Text subheading bold testID="fullName">
            {fullName}
          </Text>
          <Text secondary testID="description">
            {description}
          </Text>
          <Label testID="language">{language}</Label>
        </View>
      </View>
      <View style={styles.footer}>
        <FooterBox
          label="Stars"
          value={stargazersCount}
          testID="stargazersCount"
        />
        <FooterBox label="Forks" value={forksCount} testID="forksCount" />
        <FooterBox label="Reviews" value={reviewCount} testID="reviewCount" />
        <FooterBox
          label="Rating"
          value={ratingAverage}
          testID="ratingAverage"
        />
      </View>
    </View>
  );
};

export default RepositoryItem;
