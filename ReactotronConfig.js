import Reactotron from 'reactotron-react-native';

Reactotron
  .configure({
    name: 'React native',
    host: '192.168.200.23', // IP الكمبيوتر
  })
  .useReactNative()
  .connect();

Reactotron.clear(); // ينضف اللوجات القديمة
console.tron = Reactotron; // 👈 لازم بعد connect()
