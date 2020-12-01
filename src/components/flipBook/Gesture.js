import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity, Text} from 'react-native';
import Sound from 'react-native-sound';
import {getPreSignedUrl} from '../../../AWSClient';
import {Button} from '../shared';
import Footer from '../Footer';

class Gesture extends React.Component {
  state = {};

  componentDidMount() {
    this.getGif(this.props.gifUrl);
    this.getSound(this.props.mp3Url);
    this.getDrawing(this.props.drawingUrl);
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
        drawing
      });
    });
  };

  playSound = () => {
    this.state.sound.play();
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.gestureContainer}>
          <Image
            style={{width: 350, height: 350}}
            source={{uri: this.state.gif}}
          />
          <TouchableOpacity onPress={() => this.playSound()}>
            <Text style={styles.name}>
              {this.props.gestureName}
            </Text>
          </TouchableOpacity>
          <Image
            style={{width: 150, height: 150}}
            source={{uri: this.state.drawing}}
          />
        </View>
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    position: 'relative'
  },

  gestureContainer: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
    backgroundColor: '#F7E3EA',
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
    color: '#FC460A',
  }
});

export default Gesture;
