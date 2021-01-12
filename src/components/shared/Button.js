import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Button = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[styles.buttonStyle, props.additionalButtonStyles]}
      enabled={props.enabled}>
      <Text style={[styles.textStyle, props.additionalButtonTextStyles]}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    width: 135,
    height: 60,
    borderColor: 'white',
    borderWidth: 2,
    margin: 10,
    paddingTop: 5
  },

  textStyle: {
    color: '#6FD4C6',
    alignSelf: 'center',
    fontSize: 40,
    fontWeight: '600',
  },
};

export {Button};
