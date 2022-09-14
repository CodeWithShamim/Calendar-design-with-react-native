import { View, Text, StyleSheet } from "react-native";
import moment from "moment";

const CalendarScreen = () => {
  return (
    <View style={styles.container}>
      <Text>{moment().format("YYYY-MM-DD")}</Text>
    </View>
  );
};

export default CalendarScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
