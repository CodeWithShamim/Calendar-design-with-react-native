import { View, Text, StyleSheet, ImageBackground } from "react-native";
import moment from "moment";
import CalendarPicker from "../components/CalendarPicker";

const CalendarScreen = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContent}>
        <ImageBackground
          style={styles.bgImage}
          source={require("../assets/images/bg.jpg")}
        ></ImageBackground>
      </View>

      {/* ______________date time picker______________ */}
      <CalendarPicker onPress={onPress}></CalendarPicker>
      {/* ______________bottom content________________ */}
      <View style={styles.bottomContent}>
        <Text style={styles.bottomDateText}>{moment().format("DD, MMMM")}</Text>
        <Text style={styles.bottomTimeText}>
          {moment().format("hA")} - Developer Conference
        </Text>
        <Text>Metro Hall</Text>
      </View>
    </View>
  );
};

export default CalendarScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContent: {},
  bgImage: {
    flex: 1,
    width: "100%",
    height: 200,
    // borderBottomLeftRadius: 50,
    // borderBottomRightRadius: 50,
  },
  bottomContent: {},
  bottomDateText: {
    fontSize: 30,
  },
  bottomTimeText: {
    fontWeight: "bold",
    marginVertical: 7,
  },
});
