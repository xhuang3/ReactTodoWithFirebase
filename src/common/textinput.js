import React, {Component} from 'react';
import {
  TextInput,
  StyleSheet
} from 'react-native';

module.exports = React.createClass({
  render() {
    return <TextInput
      secureTextEntry={this.props.secureTextEntry}
      onChangeText={this.props.onChangeText}
      placeholder={this.props.placeholder}
      autoCorrect={false}
      autoCapitalize='none'
      maxLength={200}
      style={styles.input}/>
  }
})

var styles = StyleSheet.create({
  input: {
    height: 26,
    width: 200,
    padding: 4,
    borderColor: '#0f0f0f',
    fontSize: 13,
    borderWidth: 0.5,
    marginBottom: 5,
    alignSelf: 'center',
  }
})
