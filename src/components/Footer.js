import React, {useState, useRef} from 'react';
import {View, Text, TouchableOpacity, Animated, Image} from 'react-native';
import {Actions, ActionConst} from 'react-native-router-flux';
import {colors} from '../helpers/styles';

const Footer = () => {
  const onCategoriesPress = () => {
    Actions.categories({type: ActionConst.REPLACE, title: 'Kategorien'});
  };

  const onHomePress = () => {
    Actions.home({type: ActionConst.REPLACE});
  };

  const onAlphaPress = () => {
    Actions.gestureIndex({type: ActionConst.REPLACE, title: 'DGS'});
  };

  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={onHomePress}>
        <Image
          source={require('../../assets/images/home.png')}
          style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={onAlphaPress}>
        <Image
          source={require('../../assets/images/alpha.png')}
          style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={onCategoriesPress}>
        <Image
          source={require('../../assets/images/categories.png')}
          style={styles.icon}
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

  icon: {
    height: 100,
    width: 100,
  },
};

// const Footer = () => {
//   const [isOpen, setIsOpen] = useState(() => false);
//   const footerWidth = useRef(new Animated.Value(15)).current;
//   // const textOpacity = useRef(new Animated.Value(0)).current;

//   const toggleFooter = () => {
//     console.log('hello');
//     Animated.timing(footerWidth, {
//       toValue: isOpen ? 15 : 95,
//       duration: 500,
//       // useNativeDriver: true
//     }).start();

//     setIsOpen((prevIsOpen) => !prevIsOpen);
//     // Animated.timing(textOpacity, {
//     //   toValue: isOpen ? 0 : 1,
//     //   duration: 1000,
//     //   useNativeDriver: true
//     // }).start();
//   };

//   const onCategoriesPress = () => {
//     Actions.categories({type: ActionConst.REPLACE, title: 'Kategorien'});
//   };

//   const onHomePress = () => {
//     Actions.gestureIndex({type: ActionConst.REPLACE, title: 'DGS'});
//   };

//   const renderFooterContent = () => {
//     if (isOpen) {
//       return (
//         <View style={styles.footerItemWrapper}>
//           <TouchableOpacity onPress={onCategoriesPress}>
//             <Animated.Text style={[styles.footerItemTitle]}>
//               Kategorien
//             </Animated.Text>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={onHomePress}>
//             <Animated.Text style={[styles.footerItemTitle]}>
//               Gebärden
//             </Animated.Text>
//           </TouchableOpacity>
//         </View>
//       );
//     }

//     return <Text style={styles.footerIcon}>M</Text>;
//   };

//   return (
//     <TouchableOpacity onPress={toggleFooter}>
//       <Animated.View
//         style={[
//           styles.footerContainer,
//           {
//             width: footerWidth.interpolate({
//               inputRange: [15, 95],
//               outputRange: ['15%', '95%'],
//             }),
//           },
//         ]}>
//         {renderFooterContent()}
//       </Animated.View>
//     </TouchableOpacity>
//   );
// };

// const styles = {
//   footerContainerClosed: {
//     backgroundColor: '#F7E3EA',
//     height: 60,
//     width: '100%',
//     borderRadius: 30,
//     position: 'absolute',
//     shadowColor: 'black',
//     bottom: 10,
//     margin: 10,
//     right: 10,
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     shadowOffset: {
//       width: 0,
//       height: 5,
//     },
//     shadowOpacity: 0.32,
//     shadowRadius: 13.22,

//     elevation: 10,
//   },

//   footerContainer: {
//     backgroundColor: '#F7E3EA',
//     height: 60,
//     flex: 0,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 30,
//     flexDirect: 'row',
//     position: 'absolute',
//     right: 0,
//     bottom: 10,
//     margin: 10,
//     // borderRadius: 20,
//     shadowColor: 'black',
//     shadowOffset: {
//       width: 0,
//       height: 5,
//     },
//     shadowOpacity: 0.32,
//     shadowRadius: 13.22,
//     elevation: 10,
//     width: '100%',
//   },

//   footerItemWrapper: {
//     flex: 2,
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     width: '100%',
//     flexDirection: 'row',
//   },

//   footerItemTitle: {
//     fontSize: 22,
//     color: '#6FD4C6',
//     fontWeight: '500',
//   },

//   footerIcon: {
//     fontSize: 28,
//     color: '#6FD4C6',
//     fontWeight: '800',
//   },
// };

export default Footer;
