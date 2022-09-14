import { View, Text, StyleSheet, ImageBackground } from "react-native";
import moment from "moment";
import CalendarPicker from "../components/CalendarPicker";
import Colors from "../constants/Colors";
import { useState } from "react";

const CalendarScreen = () => {
  const [currentDate, setCurrentDate] = useState({});

  const handleCurrentDate = (pressedDate) => {
    setCurrentDate(pressedDate);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContent}>
        <ImageBackground
          style={styles.bgImage}
          source={require("../assets/images/bg.jpg")}
        >
          <View style={styles.headerInnerContent}>
            <Text style={styles.headerLeftDayText}>{currentDate.day}</Text>
            <View style={styles.headerRightContainer}>
              <Text style={styles.headerRightDayText}>{currentDate.month}</Text>
              <Text style={styles.headerRightDayText}>{currentDate.year}</Text>
            </View>
          </View>
        </ImageBackground>
      </View>

      {/* ______________Calendar picker______________ */}
      <CalendarPicker onPress={handleCurrentDate}></CalendarPicker>

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
  headerInnerContent: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  headerLeftDayText: {
    fontSize: 80,
    paddingRight: 34,
    color: Colors.white,
    fontFamily: "Roboto-Regular",
    borderRightWidth: 2,
    borderRightColor: Colors.white,
  },
  headerRightDayText: {
    fontSize: 33,
    fontFamily: "Roboto-Bold",
    paddingLeft: 34,
    color: Colors.white,
  },
  bgImage: {
    width: "100%",
    height: 200,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
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
