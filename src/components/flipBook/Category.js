import React from 'react';
import { View, StyleSheet, Text, FlatList, RefreshControl, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { GestureContext } from '../GestureContextHolder';
import Footer from '../routing/Footer';
import { colors } from '../../helpers/styles';
import { sortByKey } from '../../helpers/functions';

class Category extends React.Component {
  state = {
    refreshing: false,
    gestures: this.props.gestureContext.gestures,
  };

  _onRefresh = async () => {
    await this.props.gestureContext.fetchGestures();
    this.setState({
      gestures: this.props.gestureContext.gestures,
    });
  };

  getGestures = () => {
    let gestures = this.state.gestures[this.props.gestureContext.lenguage];

    if (this.props.category !== undefined) {
      gestures = gestures.filter(
        (gesture) => gesture.category === this.props.category,
      );
    }

    return sortByKey(gestures, 'name');
  };

  onGesturePress = (gesture) => {
    const { gifUrl, mp3Url, drawingUrl, name } = gesture;
    Actions.gesture({ gifUrl, mp3Url, drawingUrl, gestureName: name, searchQuery: this.props.searchQuery });
  };

  render() {
    const deviceWidth = Dimensions.get('window').width;
    const gestures = this.getGestures();

    return (
      <View style={styles.container}>
        <View style={styles.gestureIndexContainer}>
          {/* <Text style={styles.title}>{this.props.title}</Text>
          <View style={styles.line}></View> */}
          <FlatList
            style={styles.listWrapper}
            data={gestures}
            numColumns={1}
            contentContainerStyle={styles.listContainer(deviceWidth)}
            keyboardShouldPersistTaps='handled'
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this._onRefresh}
                tintColor={colors.primary}
              />
            }
            renderItem={(item) => (
              <TouchableOpacity
                style={{
                  width: deviceWidth / 1.5,
                  // height: deviceWidth / 2,
                  alignItems: 'center',
                  margin: 5,
                  flex: 0,
                  flexDirection: 'row',
                }}
                onPress={() => this.onGesturePress(item.item)}>
                <Image
                  style={{
                    width: deviceWidth / 5,
                    height: deviceWidth / 5,
                    borderColor: 'white',
                    borderWidth: 2,
                  }}
                  source={{ uri: item.item.stillUrl, cache: 'force-cache' }}
                />
                <Text style={styles.gestureTitle}>{item.item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
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

  gestureIndexContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },

  title: {
    color: '#6FD4C6',
    fontSize: 40,
    fontWeight: '400',
    fontFamily: 'Futura',
  },

  line: {
    width: 150,
    borderWidth: 1,
    borderColor: '#6FD4C6',
    margin: 10,
  },

  gestureTitle: {
    fontSize: 18,
    color: colors.primary,
    margin: 10,
    fontFamily: 'Futura',
  },

  listWrapper: {
    paddingTop: 20,
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    paddingBottom: 100,
    // justifyContent: "space-between",
  },

  listContainer: (deviceWidth) => ({
    alignItems: 'center',
    paddingLeft: deviceWidth / 3.8,
    paddingBottom: 50,
  }),
});

export default (props) => (
  <GestureContext.Consumer>
    {(gestureContext) => (
      <Category {...props} gestureContext={gestureContext} />
    )}
  </GestureContext.Consumer>
);
