import React from "react";

import { createBox } from "@shopify/restyle";
import { Text } from "react-native";

import { Theme } from "../../themes/restyleTheme";

const Box = createBox<Theme>();

export default function Rafa2() {
  return (
    <Box
      flex={1}
      bg="cardPrimaryBackground"
      justifyContent="center"
      alignItems="center"
    >
      <Text>Rafa2</Text>
    </Box>
  );
}
