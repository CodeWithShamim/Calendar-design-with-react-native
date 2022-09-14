import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import { Calendar } from "react-native-calendars";
import Arrow from "./Arrow";

const CalendarPicker = () => {
  const [date, setDate] = useState(new Date());
  const [pressedDate, setPressedDate] = useState(new Date());

  console.log(pressedDate);

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
        theme={{
          backgroundColor: "#ffffff",
          calendarBackground: "#ffffff",
          textSectionTitleColor: "#000000",
          selectedDayBackgroundColor: "#00adf5",
          selectedDayTextColor: "#00adf5",
          todayTextColor: "#00adf5",
          dayTextColor: "#000000",
          dotColor: "#00adf5",
          textDayFontFamily: "monospace",
          textMonthFontFamily: "monospace",
          textDayHeaderFontFamily: "monospace",
          textDayFontWeight: "bold",
          textMonthFontWeight: "bold",
          textDayHeaderFontWeight: "500",
          textDayFontSize: 18,
          textMonthFontSize: 18,
          textDayHeaderFontSize: 18,
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
    fontWeight: "bold",
    color: "#000000",
  },
});
