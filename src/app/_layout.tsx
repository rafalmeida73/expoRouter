import { ThemeProvider } from "@shopify/restyle";
import { Stack } from "expo-router";

import restyleTheme from "../themes/restyleTheme";

export default function Layout() {
  return (
    <ThemeProvider theme={restyleTheme}>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: "transparent" },
          animation: "fade",
        }}
      >
        <Stack.Screen name="rafa" />
        <Stack.Screen name="(tabs)" />
      </Stack>
    </ThemeProvider>
  );
}
