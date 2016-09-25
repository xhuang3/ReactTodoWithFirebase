import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import Button from '../common/button';

module.exports = React.createClass({
  render(){
    return <View style={styles.container}>
      <Text>This is a detail view for item</Text>
      <Button text='return' onPress={this.onReturnPress} />
      <Button text='delete' onPress={this.onDeletePress} />
    </View>
  },
  onReturnPress(){
    this.props.navigator.pop();
  },
  onDeletePress(){
    this.props.navigator.pop();
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})