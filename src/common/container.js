import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

module.exports = React.createClass({
  render(){
    return <View style={styles.container}>{this.props.children}</View>;
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  }
})