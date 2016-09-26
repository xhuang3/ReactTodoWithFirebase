import React, {Component} from 'react';
import {
  TouchableHighlight,
  Text,
  StyleSheet
} from 'react-native';

module.exports = React.createClass({
  render(){
    return <TouchableHighlight
             style={styles.button}
             underlayColor='gray'
             onPress={this.props.onPress}>
      <Text style={styles.buttonText}>{this.props.text}</Text>
    </TouchableHighlight>
  }
});

var styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 5,
    margin: 5,
    padding: 5
  },
  buttonText: {
    fontSize: 13
  }
})
