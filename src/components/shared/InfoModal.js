import React from 'react';
import { ScrollView, Modal, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { colors } from '../../helpers/styles';

const InfoModal = ({ visible, text, onClose }) => {
  return (
    <Modal
      visible={visible}
      animationType={'slide'}
      transparent={true}
    >
      <ScrollView style={styles.infoModal} >
        <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
          <Image
            source={require(`../../../assets/images/back.png`)}
            style={styles.arrow}
          />
        </TouchableOpacity>
        <Text style={styles.infoText}>
          {text}
        </Text>
      </ScrollView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  infoModal: {
    // margin: 40,
    backgroundColor: colors.background,
    padding: 50,
    borderRadius: 10,
    height: '100%',
    paddingTop: 80,
    position: 'relative'
  },

  infoText: {
    // margin: 20,
    fontSize: 24,
    color: colors.primary,
    fontWeight: '600',
    fontFamily: 'Futura',
    paddingBottom: 100
  },

  closeBtn: {
    position: 'absolute',
    top: -50,
    right: -50,
    zIndex: 1
  },

  arrow: {
    transform: [{ rotate: '270deg' }],
    height: 100,
    width: 100
  }
});

export { InfoModal };