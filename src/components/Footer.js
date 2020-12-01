import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';


const Footer = () => {
  const onCategoriesPress = () => {
      Actions.categories({ type: ActionConst.REPLACE })
    }

    const onHomePress = () => {
      Actions.gestureIndex({ type: ActionConst.REPLACE })
    }

  return (
    <View style={styles.footerContainer}>
      <View style={styles.footerItemWrapper}>
        <TouchableOpacity onPress={onCategoriesPress}>
          <Text style={styles.footerItemTitle}>
            Kategorien
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onHomePress}>
          <Text style={styles.footerItemTitle}>
            Gebärden
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = {
  footerContainer: {
    backgroundColor: '#F7E3EA',
    height: 60,
    flex: 0,
    flexDirect: 'row',
    position: 'absolute',
    bottom: 10,
    margin: 10,
    borderRadius: 20,
    width: '95%',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.32,
    shadowRadius: 13.22,

    elevation: 10,
  },

  footerItemWrapper: {
    flex: 2,
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
  },

  footerItemTitle: {
    fontSize: 22,
    color: '#6FD4C6',
    fontWeight: '500'
  }
}

export default Footer;