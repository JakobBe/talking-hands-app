import React from 'react';
import { View, ScrollView, Image, StyleSheet, TouchableOpacity, Text, Dimensions, AppState } from 'react-native';
import Sound from 'react-native-sound';
import { getPreSignedUrl } from '../../../AWSClient';
import Footer from '../routing/Footer';
import { colors } from '../../helpers/styles';

Sound.setCategory('Playback');

class Gesture extends React.Component {
  state = {
    showGif: true,
    appState: 'active'
  };
  deviceWidth = Dimensions.get('window').width;

  componentDidMount() {
    this.getGif(this.props.gifUrl);
    this.getSound(this.props.mp3Url);
    this.getDrawing(this.props.drawingUrl);
    AppState.addEventListener('change', newState => this.setState({ appState: newState }));
  }

  componentDidUpdate() {
    if (this.state.showGif === false) {
      this.setState({
        showGif: true,
      });
    }
  }

  getGif = async (gifUrl) => {
    await getPreSignedUrl(gifUrl).then((gif) => {
      this.setState({
        gif,
      });
    });
  };

  getSound = async (mp3Url) => {
    await getPreSignedUrl(mp3Url).then((mp3) => {
      this.setState({
        sound: new Sound(mp3, null),
      });
    });
  };

  getDrawing = async (drawingUrl) => {
    await getPreSignedUrl(drawingUrl).then((drawing) => {
      this.setState({
        drawing,
      });
    });
  };

  playSound = () => {
    this.state.sound.play();
  };

  getGifComp = () => {
    if (this.state.showGif) {
      return (
        <TouchableOpacity onPress={() => this.setState({ showGif: false })}>
          <Image
            style={{
              width: this.deviceWidth - 20,
              height: this.deviceWidth - 20,
              maxWidth: 600,
              maxHeight: 600
            }}
            source={{ uri: this.state.appState === 'active' ? this.state.gif : '' }}
          />
        </TouchableOpacity>
      );
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.gestureContainer} contentContainerStyle={styles.gestureContentContainer}>
          <Text style={styles.name}>{this.props.gestureName}</Text>
          <TouchableOpacity onPress={() => this.playSound()}>
            <Image
              style={styles.soundIcon}
              source={require('../../../assets/images/sound.png')}
            />
          </TouchableOpacity>
          {this.getGifComp()}
          <Image
            style={{ width: 150, height: 150 }}
            source={{ uri: this.state.drawing }}
          />
        </ScrollView>
        <Footer navigation={this.props.navigation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    position: 'relative',
  },

  gestureContainer: {
    flex: 1,
    // alignItems: 'center',
    backgroundColor: colors.background,
  },

  gestureContentContainer: {
    alignItems: 'center',
  },

  soundIcon: {
    height: 170,
    width: 170,
    margin: -60,
    marginBottom: -40,
  },

  buttonWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  backgroundImage: {
    width: '100%',
    height: '100%',
  },

  name: {
    margin: 20,
    fontSize: 30,
    color: colors.primary,
    fontWeight: '600',
    fontFamily: 'Futura',
  },
});

export default Gesture;
