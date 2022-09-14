import { View, Text, StyleSheet } from "react-native";
import { useLayoutEffect, useState } from "react";
import { Calendar } from "react-native-calendars";
import Arrow from "./Arrow";
import Colors from "../constants/Colors";

const CalendarPicker = ({ onPress }) => {
  const [date, setDate] = useState(new Date());
  const [pressedDate, setPressedDate] = useState({
    day: "16",
    month: "09",
    year: "2022",
  });

  useLayoutEffect(() => {
    if (pressedDate) {
      onPress(pressedDate);
    }
  }, [pressedDate]);

  return (
    <View style={styles.container}>
      <Calendar
        initialDate={String(date)}
        renderHeader={(date) => {
          return <Text style={styles.headerText}>My Calendar</Text>;
        }}
        onDayPress={(day) => {
          setPressedDate(day);
        }}
        renderArrow={(direction) =>
          direction === "left" ? (
            <Arrow direction="left" />
          ) : (
            <Arrow direction="right" />
          )
        }
        hideExtraDays={true}
        enableSwipeMonths={true}
        markedDates={{
          [pressedDate.dateString]: {
            selected: true,
            selectedColor: Colors.primary700,
          },
        }}
        theme={{
          backgroundColor: Colors.white,
          calendarBackground: Colors.white,
          textSectionTitleColor: Colors.black,
          textSectionTitleDisabledColor: "#d9e1e8",
          selectedDayBackgroundColor: Colors.primary700,
          selectedDayTextColor: Colors.white,
          todayTextColor: Colors.primary700,
          dayTextColor: "#2d4150",
          textDisabledColor: "#d9e1e8",
          dotColor: Colors.primary700,
          selectedDotColor: Colors.white,
          arrowColor: "orange",
          disabledArrowColor: "#d9e1e8",
          monthTextColor: "blue",
          indicatorColor: "blue",
          textDayFontFamily: "Roboto-Bold",
          textMonthFontFamily: "Roboto-Bold",
          textDayHeaderFontFamily: "Roboto-Bold",
          textDayFontWeight: "400",
          textMonthFontWeight: "bold",
          textDayHeaderFontWeight: "bold",
          textDayFontSize: 16,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 15,
        }}
      />
    </View>
  );
};

export default CalendarPicker;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: 30,
  },
  headerText: {
    fontSize: 20,
    color: Colors.black,
    fontFamily: "Roboto-Bold",
  },
});
