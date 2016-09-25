import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import Button from '../common/button';
import Container from '../common/container';

module.exports = React.createClass({
  render(){
    return <Container>
      <Text>This is a detail view for item</Text>
      <Button text='return' onPress={this.onReturnPress} />
      <Button text='delete' onPress={this.onDeletePress} />
    </Container>
  },
  onReturnPress(){
    this.props.navigator.pop();
  },
  onDeletePress(){
    this.props.navigator.pop();
  }
});

var styles = StyleSheet.create({

})
