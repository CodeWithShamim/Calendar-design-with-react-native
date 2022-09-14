import { AntDesign } from "@expo/vector-icons";
import Colors from "../constants/Colors";

const Arrow = ({ direction }) => {
  return (
    <>
      {direction === "left" ? (
        <AntDesign name="leftcircleo" size={28} color="#ccc" />
      ) : (
        <AntDesign name="rightcircleo" size={28} color={Colors.primary700} />
      )}
    </>
  );
};

export default Arrow;
