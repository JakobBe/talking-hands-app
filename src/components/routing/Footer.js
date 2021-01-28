import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';
import { colors } from '../../helpers/styles';
import { GestureContext } from '../GestureContextHolder';

const Footer = (props) => {
  const onCategoriesPress = () => {
    Actions.categories({ type: ActionConst.RESET, title: 'Kategorien' });
  };

  const onHomePress = () => {
    if (props.gestureContext.searchQuery) {
      props.gestureContext.updateSearchQuery('');
    }

    Actions.home({ type: ActionConst.RESET });
  };

  const onAlphaPress = () => {
    Actions.gestureIndex({ type: ActionConst.RESET });
  };

  const getAlphaImage = (isActive) => {
    const imgSource = isActive ? require('../../../assets/images/alphaDark.png') : require('../../../assets/images/alpha.png');

    return (
      <Image
        source={imgSource}
        style={styles.icon(props.navigation.state.routeName === 'gestureIndex')}
      />
    );
  }

  const getCategoriesImage = (isActive) => {
    const imgSource = isActive ? require('../../../assets/images/categoriesDark.png') : require('../../../assets/images/categories.png');

    return (
      <Image
        source={imgSource}
        style={styles.icon(false)}
      />
    );
  }

  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={onHomePress}>
        <Image
          source={require(`../../../assets/images/home.png`)}
          style={styles.icon(false)}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={onAlphaPress}>
        {getAlphaImage(props.navigation.state.routeName === 'gestureIndex')}
      </TouchableOpacity>
      <TouchableOpacity onPress={onCategoriesPress}>
        {getCategoriesImage(props.navigation.state.routeName === 'categories')}
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  footer: {
    backgroundColor: colors.background,
    flex: 0,
    height: 75,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },

  icon: (active) => {
    return {
      height: 120,
      width: 120,
      opacity: 1
    };
  },
};

export default (props) => (
  <GestureContext.Consumer>
    {(gestureContext) => (
      <Footer {...props} gestureContext={gestureContext} />
    )}
  </GestureContext.Consumer>
);
