import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../../helpers/styles';

const InfoButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.infoButton}>
      <Text style={styles.infoText}>
        i
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  infoButton: {
    backgroundColor: colors.primary,
    height: 20,
    width: 20,
    borderRadius: 10,
    position: 'absolute',
    top: -10,
    right: -10,
    paddingBottom: 3
  },

  infoText: {
    color: 'white',
    fontStyle: 'italic',
    fontSize: 20,
    textAlign: 'center'
  }
});

export { InfoButton };