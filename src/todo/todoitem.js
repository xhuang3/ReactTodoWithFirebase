import React, {Component} from 'react';
import {
  TouchableHighlight,
  Text,
  StyleSheet
} from 'react-native';

module.exports = React.createClass({
  render(){
    return <TouchableHighlight 
             style={styles.container}
             underlayColor='gray'
             onPress={this.props.onPress}
             >
      <Text style={styles.text}>{this.props.text}</Text>
    </TouchableHighlight>
  }
});

var styles = StyleSheet.create({
  container: {
    height: 30,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    borderWidth: 1,
    borderColor: 'gray',
  },
  text: {
    fontSize: 30,
  }
});