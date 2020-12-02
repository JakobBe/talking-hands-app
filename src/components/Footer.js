import React, {useState, useRef} from 'react';
import {View, Text, TouchableOpacity, Animated} from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';

const Footer = () => { 
  const [isOpen, setIsOpen ] = useState(() => false);
  const footerWidth = useRef(new Animated.Value(15)).current;
  const textOpacity = useRef(new Animated.Value(0)).current;

  const toggleFooter = () => {
    console.log('hello')
    Animated.timing(footerWidth, {
      toValue: isOpen ? 15 : 95,
      duration: 500,
      useNativeDriver: true
    }).start();

    Animated.timing(textOpacity, {
      toValue: isOpen ? 0 : 1,
      duration: 1000,
      useNativeDriver: true
    }).start();
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }

  const onCategoriesPress = () => {
    Actions.categories({ type: ActionConst.REPLACE });
  }

  const onHomePress = () => {
    Actions.gestureIndex({ type: ActionConst.REPLACE });
  }

  const renderFooterContent = () => {
    return (
      <View style={styles.footerItemWrapper}>
        <TouchableOpacity onPress={onCategoriesPress}>
          <Animated.Text style={[styles.footerItemTitle, {opacity: textOpacity}]}>
            Kategorien
          </Animated.Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onHomePress}>
          <Animated.Text style={[styles.footerItemTitle, {opacity: textOpacity}]}>
            Gebärden
          </Animated.Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <TouchableOpacity onPress={toggleFooter}>
      <Animated.View 
        style={[styles.footerContainer, {scaleX: footerWidth.interpolate({ 
          inputRange: [15, 95],
          outputRange: ['15%', '95%']
        })}]}
      >
        {/* {renderFooterContent()} */}
      </Animated.View>
    </TouchableOpacity>
  );
  // return (
  //   <TouchableOpacity onPress={toggleFooter} style={styles.footerContainerClosed}>
  //     <Text>
  //       |||
  //     </Text>
  //   </TouchableOpacity>
  // );
}

const styles = {
  footerContainerClosed: {
    backgroundColor: '#F7E3EA',
    height: 60,
    width: 60,
    borderRadius: 30,
    position: 'absolute',
    shadowColor: 'black',
    position: 'absolute',
    bottom: 10,
    margin: 10,
    right: 10,
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.32,
    shadowRadius: 13.22,

    elevation: 10,
  },

  footerContainer: {
    backgroundColor: '#F7E3EA',
    height: 60,
    flex: 0,
    borderRadius: 30,
    flexDirect: 'row',
    position: 'absolute',
    right: 0,
    bottom: 10,
    margin: 10,
    borderRadius: 20,
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