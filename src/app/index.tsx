import React from "react";

import { useRouter } from "expo-router";
import { Text, View } from "react-native";

export default function App() {
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text onPress={() => router.push("/rafa")}>
        Feito com 💜 no NLW da Rocketseat
      </Text>
    </View>
  );
}
