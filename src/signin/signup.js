import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput
} from 'react-native';

import Button from '../common/button';

module.exports = React.createClass({
  render() {
    return <View style={styles.container}>
      <Text>Sign Up</Text>
      <TextInput/>
      <TextInput/>
      <TextInput/>
      <Button text='Sign up' onPress={this.onSignupPress} />
      <Button text='Return to sign in' onPress={this.onSigninPress} />
    </View>
  },
  onSignupPress(){
    this.props.navigator.immediatelyResetRouteStack([{name: 'todolist'}]);
  },
  onSigninPress(){
    this.props.navigator.pop();
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});