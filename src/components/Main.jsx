import { StyleSheet, View } from "react-native";
import { Navigate, Route, Routes } from "react-router-native";

import AppBar from "./AppBar";
import Repository from "./Repository";
import RepositoryList from "./RepositoryList";
import Review from "./Review";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e1e4e8",
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="/repository/:id" element={<Repository />} />
        <Route path="/review" element={<Review />} />
        <Route path="/signin" element={<SignIn />} exact />
        <Route path="/signup" element={<SignUp />} exact />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;
