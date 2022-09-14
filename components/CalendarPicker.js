import { View, StyleSheet } from "react-native";
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
});
