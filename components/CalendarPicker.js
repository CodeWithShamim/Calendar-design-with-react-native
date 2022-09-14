import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import { Calendar } from "react-native-calendars";
import Arrow from "./Arrow";

const CalendarPicker = () => {
  const [date, setDate] = useState(new Date());
  const [pressedDate, setPressedDate] = useState({});

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
