import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
// Components
import SignalCounter_1 from "./components/SignalCounter_1";
import SignalCounter_2 from "./components/SignalCounter_2";
// import StateCounter from "./components/StateCounter";
// Context users
// import Message from "./components/Message";
// import ContextCounter from "./components/ContextCounter";
// Context
// import { AppProvider } from "./context/AppContext";

export default function App() {
  console.log("App rendered");
  return (
    <View style={styles.container}>
      <SignalCounter_1 />
      <SignalCounter_2 />
      {/* <StateCounter /> */}
      {/* <AppProvider> */}
      {/* <Message /> */}
      {/* <ContextCounter /> */}
      {/* </AppProvider>  */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
