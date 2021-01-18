import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';
import { colors } from '../../helpers/styles';

const Footer = (props) => {
  const onCategoriesPress = () => {
    Actions.categories({ type: ActionConst.RESET, title: 'Kategorien' });
  };

  const onHomePress = () => {
    Actions.home({ type: ActionConst.RESET });
  };

  const onAlphaPress = () => {
    Actions.gestureIndex({ type: ActionConst.RESET, title: 'DGS' });
  };

  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={onHomePress}>
        <Image
          source={require('../../../assets/images/home.png')}
          style={styles.icon(false)}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={onAlphaPress}>
        <Image
          source={require('../../../assets/images/alpha.png')}
          style={styles.icon(props.navigation.state.routeName === 'gestureIndex')}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={onCategoriesPress}>
        <Image
          source={require('../../../assets/images/categories.png')}
          style={styles.icon(props.navigation.state.routeName === 'categories' || props.navigation.state.routeName === 'category')}
        />
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
      opacity: active ? 1 : 0.5,
    };
  },
};

export default Footer;
