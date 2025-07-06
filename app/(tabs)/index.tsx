import { Text, View } from "react-native";
import UserScreen from "../screens/UserScreen";
import InputScreen from "../components/inputScreen";


export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        
      }}
    >
      <UserScreen/>
     {/*  <InputScreen /> */}
    </View>
  );
}
