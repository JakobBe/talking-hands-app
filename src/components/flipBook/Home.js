import React from 'react';
import { View, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import { Button } from '../shared';
import { Actions, ActionConst } from 'react-native-router-flux';
import { colors } from '../../helpers/styles';
import { GestureContext } from '../GestureContextHolder';

class Home extends React.Component {
  onGestureIndexPress = (type) => {
    this.props.gestureContext.setLenguage(type);
    Actions.gestureIndex({ title: type });
  };

  render() {
    const deviceWidth = Dimensions.deviceWidth;
    const deviceHeight = Dimensions.deviceHeight;

    console.log('hallo');

    return (
      <View style={styles.container(deviceWidth, deviceHeight)}>
        <ImageBackground
          source={require('../../../assets/images/homescreen.gif')}
          style={styles.backgroundImage}>
          <View style={styles.buttonWrapper}>
            <Button
              onPress={() => this.onGestureIndexPress('DGS')}
              title="DGS"
              additionalButtonTextStyles={{ color: colors.dgs }}
            />
            <Button
              onPress={() => this.onGestureIndexPress('GUK')}
              title="GUK"
              additionalButtonTextStyles={{ color: colors.guk }}
            />
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: (width, height) => {
    return {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F7E3EA',
      width,
      height,
    };
  },

  buttonWrapper: {
    position: 'absolute',
    top: '41%',
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  backgroundImage: {
    width: '100%',
    height: '100%',
  },
});


export default (props) => (
  <GestureContext.Consumer>
    {(gestureContext) => (
      <Home {...props} gestureContext={gestureContext} />
    )}
  </GestureContext.Consumer>
);
