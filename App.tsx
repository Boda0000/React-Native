import React from "react";
import Navigator from "./src/screen/Navigation/Navigator";
import reactotron from "reactotron-react-native";
import './ReactotronConfig';

// @ts-ignore
console.tron.log('🚀 Reactotron Connected!');


export default function App() {
  return <Navigator />;
}
