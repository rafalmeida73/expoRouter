import React from "react";

import { createBox } from "@shopify/restyle";
import { useRouter } from "expo-router";
import { Text } from "react-native";

const Box = createBox();

export default function Rafa() {
  const router = useRouter();

  return (
    <Box
      flex={1}
      bg="cardPrimaryBackground"
      justifyContent="center"
      alignItems="center"
    >
      <Text onPress={() => router.push("rafa2")}>Rafa stack</Text>
    </Box>
  );
}
