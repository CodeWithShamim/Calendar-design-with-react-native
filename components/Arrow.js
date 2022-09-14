import { View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Arrow = ({ direction }) => {
  return (
    <View>
      {direction === "left" ? (
        <AntDesign name="leftcircleo" size={24} color="#ccc" />
      ) : (
        <AntDesign name="rightcircleo" size={24} color="#ccc" />
      )}
    </View>
  );
};

export default Arrow;
