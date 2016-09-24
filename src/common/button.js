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
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  buttonText: {
    fontSize: 20
  }
})