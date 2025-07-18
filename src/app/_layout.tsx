import { Stack } from "expo-router";

import { ThemeProvider } from "styled-components/native";
import theme from "@/src/theme";

import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import Loading from "../components/Loading";
import { StatusBar } from "react-native";


export default function RootLayout() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Stack screenOptions={{ headerShown: false }} /> : <Loading />}
    </ThemeProvider>
  );
}
