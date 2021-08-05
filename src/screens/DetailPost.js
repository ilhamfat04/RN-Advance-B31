import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  RefreshControl,
} from "react-native";
import { ListItem, Avatar } from "react-native-elements";

// Import Axios

const PostDetail = (props) => {
  //init Props

  //Init State

  // Create LifeCycle
  //Function Exception

  // Create Function to fetch

  //   Create Component List
  return (
    <View style={style.container}>
      <Text h2 style={{ fontWeight: "bold" }}>
        This Is Post Detail
      </Text>
      {/* Implement Axios Here */}
      {/* Render Component List */}
    </View>
  );
};

export default PostDetail;

const style = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    padding: 16,
    flex: 1,
  },
});
