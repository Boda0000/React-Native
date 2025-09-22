import React from "react";
import { SafeAreaView } from "react-native";
import HomeScreen from "./src/screen/homescreen/HomeScreen";

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HomeScreen />
    </SafeAreaView>
  );
}

export default App;
