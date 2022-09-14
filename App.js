import { StatusBar } from "expo-status-bar";
import CalendarScreen from "./screens/CalendarScreen";

export default function App() {
  return (
    <>
      <StatusBar style="light" backgroundColor="red" />
      <CalendarScreen></CalendarScreen>
    </>
  );
}
