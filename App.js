import React from 'react';
import GestureContextHolder from './src/components/GestureContextHolder';
import Router from './src/components/Router';
import { LogBox } from 'react-native';
LogBox.ignoreAllLogs();

const App = () => {
  return (
    <GestureContextHolder>
      <Router />
    </GestureContextHolder>
  );
};

export default App;
