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
            source={require(`../../../assets/images/close.png`)}
            style={styles.close}
          />
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  infoModal: {
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
    fontSize: 20,
    color: colors.primary,
    fontWeight: '600',
    fontFamily: 'Futura',
    paddingBottom: 100
  },

  closeBtn: {
    position: 'absolute',
    top: -10,
    right: -30,
    zIndex: 1
  },

  close: {
    transform: [{ rotate: '270deg' }],
    height: 140,
    width: 140
  }
});

export { InfoModal };