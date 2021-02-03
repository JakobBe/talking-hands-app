import React, { ref } from 'react';
import { View, Text, Image, TouchableOpacity, Animated, Dimensions, TextInput } from 'react-native';
import { colors } from '../../helpers/styles';
import { Actions, ActionConst } from 'react-native-router-flux';
import { categories } from '../../helpers/variables';
import { GestureContext } from '../GestureContextHolder';

class CustomHeader extends React.Component {
  searchInput = new Animated.Value(0);
  searchInputBorder = new Animated.Value(0);

  toggleSearchInput = (open) => {
    Animated.timing(this.searchInput, {
      toValue: open ? 270 : 0,
      duration: 400,
      useNativeDriver: false
    }).start();

    Animated.timing(this.searchInputBorder, {
      toValue: open ? 2 : 0,
      duration: 400,
      useNativeDriver: false
    }).start();
  }

  onBack = () => {
    Actions.pop();
  };

  onSearchQueryChange = (searchQuery) => {
    this.props.gestureContext.updateSearchQuery(searchQuery);

    if (Actions.currentScene !== 'gestureIndex') {
      this.chnageToGestureIndex();
    }
  }

  chnageToGestureIndex = async () => {
    await Actions.gestureIndex({ type: ActionConst.RESET });
    this.searchInputRef.focus();
  }

  onMagnifierClick = () => {
    if (this.searchInputRef.isFocused()) {
      this.searchInputRef.blur();
    } else {
      this.searchInputRef.focus();
    }
  }

  onSearchBlur = () => {
    console.log('BLURRRR');
    this.toggleSearchInput(false);
  }

  onSearchFocus = () => {
    console.log('FOCUS');
    this.toggleSearchInput(true);
  }

  getTitle = () => {
    const routes = this.props.navigation.state.routes;
    const categoryRoute = routes.find((route) => route.params.category !== undefined);

    if (categoryRoute) {
      return categories[categoryRoute.params.category].name;
    }

    const scene = Actions.currentScene;
    let title = this.props.gestureContext.lenguage;

    switch (scene) {
      case 'categories':
        title = 'Kategorien';
        break;
      case 'gestureIndex':
        title = this.props.gestureContext.lenguage;
        break;
    }

    return title;
  };

  getBackButton = () => {
    const scene = Actions.currentScene;
    if (scene === 'categories' || scene === 'gestureIndex') {
      return (
        <View />
      );
    } else {
      return (
        <TouchableOpacity onPress={() => this.onBack()} style={styles.leftIcon}>
          <Image
            source={require('../../../assets/images/back.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      );
    }
  }

  render() {
    const deviceWidth = Dimensions.get('window').width;
    const title = this.getTitle();
    return (
      <View style={styles.customHeader(deviceWidth)}>
        {this.getBackButton()}
        <Text style={styles.headerText}>{title}</Text>
        <Animated.View
          style={[
            styles.searchInput,
            {
              width: this.searchInput,
              borderWidth: this.searchInputBorder,
            },
          ]}
        >
          <TextInput
            style={styles.searchInputText}
            ref={(input) => { this.searchInputRef = input; }}
            onChangeText={this.onSearchQueryChange}
            value={this.props.gestureContext.searchQuery}
            onBlur={this.onSearchBlur}
            onFocus={this.onSearchFocus}
          >
          </TextInput>
        </Animated.View>
        <TouchableOpacity style={styles.rightIcon} onPress={this.onMagnifierClick}>
          <Image
            source={require('../../../assets/images/search.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = {
  customHeader: (width) => {
    return {
      flex: 0,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'flex-end',
      height: 90,
      backgroundColor: colors.background,
      position: 'relative',
    };
  },

  searchInput: {
    backgroundColor: colors.background,
    position: 'absolute',
    height: 45,
    right: 10,
    bottom: -10,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: colors.guk,
    padding: 10,
    justifyContent: 'center',
  },

  searchInputText: {
    color: colors.primary,
    fontFamily: 'Futura',
    height: 30,
    fontSize: 20
  },

  headerText: {
    color: colors.primary,
    fontSize: 22,
    fontFamily: 'Futura',
    textTransform: 'uppercase',
  },

  leftIcon: {
    position: 'absolute',
    top: 10,
    left: -30,
  },

  rightIcon: {
    position: 'absolute',
    top: 10,
    right: -30,
  },

  icon: {
    height: 120,
    width: 120,
  },
};


export default (props) => (
  <GestureContext.Consumer>
    {(gestureContext) => (
      <CustomHeader {...props} gestureContext={gestureContext} />
    )}
  </GestureContext.Consumer>
);
