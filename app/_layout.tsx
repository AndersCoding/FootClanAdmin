import { Stack, Tabs } from "expo-router";
import { UserProvider } from "./context/UserContext";

export default function Layout() {
  return (
    <UserProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </UserProvider>
  );
}