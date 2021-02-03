import React from 'react';
import { View, ScrollView, Modal, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { colors } from '../../helpers/styles';

const InfoModal = ({ visible, text, onClose }) => {
  return (
    <Modal
      visible={visible}
      animationType={'slide'}
      transparent={true}
    >
      <View style={styles.infoModal}>
        <ScrollView style={styles.infoModal__scroll} >
          <Text style={styles.infoText}>
            {text}
          </Text>
        </ScrollView>
        <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
          <Image
            source={require(`../../../assets/images/back.png`)}
            style={styles.arrow}
          />
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  infoModal: {
    // margin: 40,
    backgroundColor: colors.background,
    borderRadius: 10,
    paddingRight: 20,
    paddingTop: 80,
    paddingBottom: 0,
    paddingLeft: 40,
    position: 'relative'
  },

  infoModal__scroll: {
    height: '100%',
    paddingRight: 20
  },

  infoText: {
    // margin: 20,
    fontSize: 20,
    color: colors.primary,
    fontWeight: '600',
    fontFamily: 'Futura',
    paddingBottom: 100
  },

  closeBtn: {
    position: 'absolute',
    top: 10,
    right: -5,
    zIndex: 1
  },

  arrow: {
    transform: [{ rotate: '270deg' }],
    height: 100,
    width: 100
  }
});

export { InfoModal };