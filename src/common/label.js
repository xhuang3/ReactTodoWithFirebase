import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

class Label extends Component{
  render() {
    return <View style={styles.container}>
      <Text style={styles.text}>
        {this.props.text}
      </Text>
    </View>
  }
}

var styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 26,
  }
})

export default Label;
