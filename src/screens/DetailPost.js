import React, { useState, useEffect } from "react";
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
import axios from "axios"

const PostDetail = (props) => {
  //init Props
  const { title, body, id } = props.route.params

  //Init State
  const [comments, setComments] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  // Create LifeCycle
  //Function Exception

  useEffect(() => {
    getComment()
  }, [])

  // Create Function to fetch
  const getComment = () => {
    setIsLoading(true)
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((res) => {
        setComments(res.data)
        setIsLoading(false)
      })
      .catch(() => {
        alert("Error fetch data")
        setIsLoading(false)
      })
  }

  const _renderItem = ({ item }) => {
    return (
      <ListItem
        key={item.id.toString()}
        bottomDivider
      >
        <ListItem.Content>
          <ListItem.Title h4 numberOfLines={1}>
            {item.email}
          </ListItem.Title>
          <ListItem.Subtitle numberOfLines={2}>
            {`${item.name} - ${item.body}`}
          </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    )
  }

  return (
    <View style={style.container}>
      <Text h2 style={{ fontWeight: "bold" }}>
        This Is Post Detail
      </Text>
      {/* Implement Axios Here */}
      {/* Render Component List */}
      <Text h2 style={{ marginTop: 20 }} >{title}</Text>
      <Text style={{ marginTop: 20 }} >{body}</Text>
      <Text style={{ marginTop: 20, color: "grey" }} >Comments</Text>
      <FlatList
        data={comments}
        renderItem={_renderItem}
        keyExtractor={(item) => item.id.toString()}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={getComment} />
        }
      />
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
