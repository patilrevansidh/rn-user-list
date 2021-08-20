import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {COLORS} from '../contants';

const Error = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.error}>{props.error}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
  },
  error: {
    textAlign: 'center',
    color: COLORS.RED,
  },
});

export default Error;
