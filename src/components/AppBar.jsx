import Constants from "expo-constants";
import { ScrollView, StyleSheet, View } from "react-native";

import AppBarTab from "./AppBarTab";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.appBarBackground,
    flexDirection: "row",
    padding: 20,
    paddingTop: 20 + Constants.statusBarHeight,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab link="/">Repositories</AppBarTab>
        <AppBarTab link="/signin">Sign In</AppBarTab>
      </ScrollView>
    </View>
  );
};

export default AppBar;
