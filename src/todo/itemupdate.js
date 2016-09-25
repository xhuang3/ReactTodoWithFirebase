import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet
} from 'react-native';
import Container from '../common/container';

module.exports = React.createClass({
  render(){
    return <Container>
      <Text>Name</Text>
      <Text>Detail description</Text>
      <Button text='add' onPress={this.onAddPress} />
    </Container>
  }
});

var styles = StyleSheet.create({
})