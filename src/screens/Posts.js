import React from "react";
import { View, Text, Button, StyleSheet, FlatList } from "react-native";
import { ListItem, Avatar } from "react-native-elements";

// Import Axios

const Posts = (props) => {
  //Init State

  // Create LifeCycle
  //Function Exception

  // Create Function to fetch

  //   Create Component List
  return (
    <View style={style.container}>
      <View>
        <Text>This Is Post</Text>

        <Button
          title="To Detail Post"
          onPress={() => props.navigation.navigate("DetailPost")}
        />
        {/* Render Component List */}
      </View>
    </View>
  );
};

export default Posts;

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
});
