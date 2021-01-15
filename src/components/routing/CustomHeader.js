import React, { ref } from 'react';
import { View, Text, Image, TouchableOpacity, Animated, Dimensions, TextInput } from 'react-native';
import { colors } from '../../helpers/styles';
import { Actions, ActionConst } from 'react-native-router-flux';
import { categories } from '../../helpers/variables';
import { findInArrayOfObjects } from '../../helpers/functions';
import { GestureContext } from '../GestureContextHolder';

class CustomHeader extends React.Component {
  state = {
    isSearchOpen: false,
    searchQuery: '',
  };

  searchInput = new Animated.Value(0);
  searchInputBorder = new Animated.Value(0);

  componentDidMount() {
    // console.log('Header mount');
  }

  componentDidUpdate() {
    if (Actions.currentScene === "gestureIndex" && this.state.isSearchOpen) {
      this.secondTextInput.focus();
    }

    if (Actions.currentScene === "gesture" && this.state.isSearchOpen) {
      console.log('this.props.navigation', this.props.navigation)
      // Actions.refresh({ title: 'DGS', searchQuery: '' });
      // this.setState({
      //   isSearchOpen: false,
      //   searchQuery: ''
      // });

      // Animated.timing(this.searchInput, {
      //   toValue: 0,
      //   duration: 200,
      //   useNativeDriver: false
      // }).start();

      // Animated.timing(this.searchInputBorder, {
      //   toValue: 0,
      //   duration: 200,
      //   useNativeDriver: false
      // }).start();

      // this.onSearchQueryChange('');
    }
    // console.log('Header update');
  }

  toggleSearchInput = () => {
    console.log('triggered?')
    Animated.timing(this.searchInput, {
      toValue: this.state.isSearchOpen ? 0 : 270,
      duration: 400,
      useNativeDriver: false
    }).start();

    Animated.timing(this.searchInputBorder, {
      toValue: this.state.isSearchOpen ? 0 : 2,
      duration: 400,
      useNativeDriver: false
    }).start();

    if (this.state.isSearchOpen === false) {
      this.secondTextInput.focus();
    } else if (this.state.isSearchOpen) {
      this.secondTextInput.blur();
    }

    this.setState({
      isSearchOpen: !this.state.isSearchOpen
    });
  }

  onBack = () => {
    Actions.pop();
  };

  onSearchQueryChange = (searchQuery) => {
    this.setState({
      searchQuery,
    });

    const scene = Actions.currentScene;

    if (scene !== 'gestureIndex') {
      Actions.gestureIndex({ title: 'DGS', searchQuery, type: ActionConst.RESET });
      this.secondTextInput.focus();
    } else {
      Actions.refresh({ title: 'DGS', searchQuery });
    }
  }

  getTitle = () => {
    // console.log('this.props', this.props);
    const routes = this.props.navigation.state.routes;
    const categoryRoute = routes.find((route) => route.params.category !== undefined);

    if (categoryRoute) {
      return categories[categoryRoute.params.category].name;
    }

    const scene = Actions.currentScene;
    let title = 'TalkingHands';

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
    console.log('this.state', this.state);
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
            ref={(input) => { this.secondTextInput = input; }}
            onChangeText={this.onSearchQueryChange}
            value={this.state.searchQuery}
          // onBlur={this.onBack}
          >
          </TextInput>
        </Animated.View>
        <TouchableOpacity style={styles.rightIcon} onPress={this.toggleSearchInput}>
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
      // width,
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
