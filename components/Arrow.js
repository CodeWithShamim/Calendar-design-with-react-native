import { View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Arrow = ({ direction }) => {
  return (
    <View>
      {direction === "left" ? (
        <AntDesign name="leftcircleo" size={28} color="#ccc" />
      ) : (
        <AntDesign name="rightcircleo" size={28} color="#ccc" />
      )}
    </View>
  );
};

export default Arrow;
