import React from 'react';
import {Scene, Router, Actions, ActionConst} from 'react-native-router-flux';
import Home from './flipBook/Home';
import GestureIndex from './flipBook/GestureIndex';
import Gesture from './flipBook/Gesture';
import Categories from './flipBook/Categories';
import {CustomHeader} from '../components/shared';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene
          key="home"
          component={Home}
          initial
          duration={0}
          hideNavBar={true}
        />
        <Scene
          key="gestureIndex"
          component={GestureIndex}
          duration={0}
          navBar={CustomHeader}
        />
        <Scene
          key="gesture"
          component={Gesture}
          duration={0}
          navBar={CustomHeader}
        />
        <Scene
          key="categories"
          component={Categories}
          duration={0}
          navBar={CustomHeader}
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
