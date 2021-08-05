import * as React from "react";
import { Text, Box } from "native-base";

export default function Hello() {
  return (
    <Box bg="primary.400" flex={1} alignItems="center" justifyContent="center">
      <Text fontFamily="body" fontWeight={400} fontStyle="italic" fontSize={30}>
        Life's too short
      </Text>
    </Box>
  );
}
