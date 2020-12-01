import React from 'react';
import GestureContextHolder from './src/components/GestureContextHolder';
import Router from './src/components/Router';
console.disableYellowBox = true;

const App = () => {
  console.log('Start App');
  return (
    <GestureContextHolder >
      <Router />
    </GestureContextHolder>
  );
};

export default App;
