import React from 'react';
import { View, StyleSheet, Text, FlatList, RefreshControl, TouchableOpacity, Image } from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';
import {Button} from '../shared';
import { GestureContext } from '../GestureContextHolder';
import Footer from '../Footer';

class GestureIndex extends React.Component {
  state = {
    refreshing: false
  };

  _onRefresh = () => {
    this.props.gestureContext.fetchGestures;
  }

  onGesturePress = (gesture) => {
    console.log('gesture', gesture);
    const { gifUrl, mp3Url, drawingUrl, name } = gesture;
    Actions.gesture({ gifUrl, mp3Url, drawingUrl, gestureName: name });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.gestureIndexContainer}>
          {/* <Text style={styles.title}>{this.props.title}</Text>
          <View style={styles.line}></View> */}
          <FlatList
            style={styles.listWrapper}
            data={this.props.gestureContext.gestures}
            numColumns={2}
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this._onRefresh}
                tintColor={'#FC460A'}
              />
            }
            renderItem={(item) => (
              <TouchableOpacity
                style={{width: 200, height: 200, alignItems: 'center', margin: 0, marginBottom: 20}}
                onPress={() => this.onGesturePress(item.item)}>
                <Image
                  style={{width: 150, height: 150}}
                  source={{uri: item.item.stillUrl}}
                />
                <Text style={styles.gestureTitle}>{item.item.name}</Text>
              </TouchableOpacity>
            )}
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

  gestureIndexContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7E3EA',
  },

  title: {
    color: '#6FD4C6',
    fontSize: 40,
    fontWeight: '400',
  },

  line: {
    width: 150,
    borderWidth: 1,
    borderColor: '#6FD4C6',
    margin: 10,
  },

  gestureTitle: {
    fontSize: 22,
    color: '#FC460A',
    margin: 10,
  },

  listWrapper: {
    paddingTop: 40,
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    paddingBottom: 100
    // justifyContent: "space-between",
  }
});

export default (props) => (
  <GestureContext.Consumer>
    {gestureContext => <GestureIndex {...props} gestureContext={gestureContext}/>}
  </GestureContext.Consumer>
);