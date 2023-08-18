import { SafeAreaView, StatusBar } from "react-native";

import ShoppingCart from "./src/pages/ShoppingCart";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
  Montserrat_400Regular_Italic,
} from "@expo-google-fonts/montserrat";

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    'MontserratRegular': Montserrat_400Regular,
    'MontserratBold': Montserrat_700Bold,
    'MontserratItalic': Montserrat_400Regular_Italic,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaView>
      <StatusBar />
      <ShoppingCart />
    </SafeAreaView>
  );
}
