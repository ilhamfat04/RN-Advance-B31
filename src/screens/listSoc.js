import * as React from "react";
import { Text, Box, FlatList, Pressable } from "native-base";

// Add Props in Hello({navigation})
export default function Hello({ navigation }) {
  // Set Dummy Data with Array
  const socialMedia = ["Tiktok", "Instagram", "Twitter", "Facebook"]

  // Make Function handle press to get value per list
  const handlePress = (value) => {
    const data = value + "data"
    navigation.navigate("Detail Social", { value, data })
  }

  return (
    <Box
      safeArea
      bg="primary.400"
      flex={1}
      alignItems="center"
      justifyContent="center"
      p={10}
    >
      <FlatList
        data={socialMedia}
        renderItem={({ item }) => (
          <Pressable onPress={() => handlePress(item)} >
            <Text
              fontFamily="body"
              fontWeight={400}
              fontSize={30}
              marginBottom={5}
            >{item}</Text>
          </Pressable>
        )}
      />
    </Box>
  );
}
