import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {COLORS} from '../contants';

const Loader = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Loading</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    color: COLORS.BLACK,
  },
});

export default Loader;
