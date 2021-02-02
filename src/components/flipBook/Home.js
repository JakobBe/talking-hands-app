import React from 'react';
import { View, StyleSheet, ImageBackground, Dimensions, Modal, Text } from 'react-native';
import { Button, InfoModal, InfoButton } from '../shared';
import { Actions, ActionConst } from 'react-native-router-flux';
import { colors } from '../../helpers/styles';
import { GestureContext } from '../GestureContextHolder';
import { infoText } from '../../helpers/variables';

class Home extends React.Component {
  state = {
    isModalActive: false,
    infoTextSelector: ''
  }

  onGestureIndexPress = (type) => {
    this.props.gestureContext.setLenguage(type);
    Actions.gestureIndex({ title: type, type: ActionConst.RESET });
  };

  render() {
    const deviceHeight = Dimensions.get('window').height;

    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../../../assets/images/homescreen.gif')}
          style={styles.backgroundImage}>
          <View style={styles.buttonWrapper(deviceHeight)}>
            <Button
              onPress={() => this.onGestureIndexPress('dgs')}
              title="DGS"
              additionalButtonTextStyles={{ color: colors.dgs }}
              additionalButtonStyles={{ position: 'relative' }}
            >
              <InfoButton onPress={() => this.setState({ isModalActive: true, infoTextSelector: 'dgs' })} />
            </Button>
            <Button
              onPress={() => this.onGestureIndexPress('guk')}
              title="GUK"
              additionalButtonTextStyles={{ color: colors.guk }}
              additionalButtonStyles={{ position: 'relative' }}
            >
              <InfoButton onPress={() => this.setState({ isModalActive: true, infoTextSelector: 'guk' })} />
            </Button>
          </View>
          <InfoModal
            visible={this.state.isModalActive}
            text={infoText[this.state.infoTextSelector]}
            onClose={() => this.setState({ isModalActive: false })}
          />
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7E3EA',
  },

  buttonWrapper: (deviceHeight) => ({
    position: 'absolute',
    top: deviceHeight / 2 - 80,
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }),

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
