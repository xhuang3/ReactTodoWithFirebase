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
      <Button text='return' onPress={this.onReturnPress}/>
    </View>
  },
  onReturnPress(){
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