import * as React from "react";
import { Text, Box, Pressable } from "native-base";

// Add Props in Hello({navigation})
export default function Hello({ navigation }) {
  return (
    <Box bg="primary.400" flex={1} alignItems="center" justifyContent="center">
      <Text fontFamily="body" fontWeight={400} fontStyle="italic" fontSize={30}>
        Life's too short
      </Text>

      {/* Create Button */}
      <Pressable
        onPress={() => navigation.navigate("IncDec")}
        style={{
          backgroundColor: "#f9f9f9",
          margin: 20,
          borderRadius: 10,
          width: "90%",
          height: 40,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Text color={{ color: "gray" }}>Click here for open IncDec Screen</Text>
      </Pressable>
    </Box>
  );
}
