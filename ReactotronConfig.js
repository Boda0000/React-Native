// import Reactotron from 'reactotron-react-native';

// Reactotron
//   .configure({
//     name: 'React native',
//     host: '192.168.200.23',
//   })
//   .useReactNative()
//   .connect();

// Reactotron.clear();
// console.tron = Reactotron;

import Reactotron, {
  asyncStorage,
  networking,
  trackGlobalErrors,
} from "reactotron-react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

Reactotron.setAsyncStorageHandler(AsyncStorage)
  .configure({
    name: "React Native Demo",
    host: "192.168.200.23",
  })
  .useReactNative({
    asyncStorage: true,
    networking: {
      ignoreUrls: /symbolicate|127\.0\.0\.1/,
    },
    editor: false,
    overlay: false,
  })
  .use(networking())
  .use(trackGlobalErrors())
  .use(asyncStorage())
  .connect();

Reactotron.clear();

console.tron = Reactotron;

export default Reactotron;
