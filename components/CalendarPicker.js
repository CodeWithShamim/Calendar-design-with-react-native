import { View, Text, StyleSheet } from "react-native";
import { useLayoutEffect, useState } from "react";
import { Calendar } from "react-native-calendars";
import Arrow from "./Arrow";
import Colors from "../constants/Colors";

const CalendarPicker = ({ onPress }) => {
  const [date, setDate] = useState(new Date());
  const [pressedDate, setPressedDate] = useState({});

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
          backgroundColor: "#ffffff",
          calendarBackground: "#ffffff",
          textSectionTitleColor: "#000000",
          textSectionTitleDisabledColor: "#d9e1e8",
          selectedDayBackgroundColor: Colors.primary700,
          selectedDayTextColor: "#ffffff",
          todayTextColor: Colors.primary700,
          dayTextColor: "#2d4150",
          textDisabledColor: "#d9e1e8",
          dotColor: Colors.primary700,
          selectedDotColor: "#ffffff",
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
    marginTop: 220,
    marginHorizontal: 30,
  },
  headerText: {
    fontSize: 20,
    color: "#000000",
    fontFamily: "Roboto-Bold",
  },
});
