import { useApolloClient, useQuery } from "@apollo/client";
import Constants from "expo-constants";
import { ScrollView, StyleSheet, View } from "react-native";

import AppBarTab from "./AppBarTab";
import theme from "../theme";
import { ME } from "../graphql/queries";
import useAuthStorage from "../hooks/useAuthStorage";
import { useNavigate } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.appBarBackground,
    flexDirection: "row",
    padding: 20,
    paddingTop: 20 + Constants.statusBarHeight,
  },
});

const AppBar = () => {
  const { data, loading } = useQuery(ME, {
    fetchPolicy: "cache-and-network",
  });
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const navigate = useNavigate();

  const signOut = async () => {
    await authStorage.removeAccessToken();

    await apolloClient.resetStore();

    navigate("/");
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab link="/">Repositories</AppBarTab>
        {!loading && data.me ? (
          <>
            <AppBarTab link="/review">Create a review</AppBarTab>
            <AppBarTab onPress={signOut}>Sign Out</AppBarTab>
          </>
        ) : (
          <>
            <AppBarTab link="/signin">Sign In</AppBarTab>
            <AppBarTab link="/signup">Sign Up</AppBarTab>
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
