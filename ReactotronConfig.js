import Reactotron from 'reactotron-react-native';

Reactotron
  .configure({
    name: 'React native',
    host: '192.168.200.23', 
  })
  .useReactNative()
  .connect();

Reactotron.clear(); 
console.tron = Reactotron; 
