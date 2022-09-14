import { StatusBar } from "expo-status-bar";
import CalendarScreen from "./screens/CalendarScreen";
import { useFonts } from "expo-font";
import { Text } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-ThinItalic": require("./assets/fonts/Roboto-ThinItalic.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  const handleCurrentDate = (pressedDate) => {
    console.log(pressedDate);
  };

  return (
    <>
      <StatusBar style="light" />
      <CalendarScreen onPress={handleCurrentDate}></CalendarScreen>
    </>
  );
}
