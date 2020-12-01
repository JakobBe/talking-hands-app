import React from 'react';
import { Scene, Router, Actions, ActionConst } from 'react-native-router-flux';
import Home from './flipBook/Home';
import GestureIndex from './flipBook/GestureIndex';
import Gesture from './flipBook/Gesture';
import Categories from './flipBook/Categories';


const RouterComponent = () => {
  return (
    <Router>
      <Scene key='root' >
        <Scene 
          key='home' 
          component={Home}
          initial
          duration={0}
          hideNavBar={true}
        />
        <Scene 
          key='gestureIndex' 
          component={GestureIndex}
          duration={0}
          navigationBarStyle={{ backgroundColor: '#F7E3EA', fontSize: 40, fontWeight: '400' }}
          navBarButtonColor={'#6FD4C6'}
          headerBackTitle=""
        />
        <Scene 
          key='gesture' 
          component={Gesture}
          duration={0}
          navigationBarStyle={{ backgroundColor: '#F7E3EA', fontSize: 40, fontWeight: '400' }}
          navBarButtonColor={'#6FD4C6'}
        />
        <Scene 
          key='categories' 
          component={Categories}
          duration={0}
          navigationBarStyle={{ backgroundColor: '#F7E3EA', fontSize: 40, fontWeight: '400' }}
          navBarButtonColor={'#6FD4C6'}
        />
      </Scene> 
    </Router>
  );
}

export default RouterComponent;