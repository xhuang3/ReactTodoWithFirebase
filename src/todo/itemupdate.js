import React, {Component} from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import Container from '../common/container';
import Label from '../common/label';
import TextInput from '../common/textinput';
import {database} from '../common/firebaseapp';

module.exports = React.createClass({
  render(){
    return <Container>
      <Label text='Add new item'/>
      <TextInput
        placeholder={'title'}
      />
      <TextInput
        placeholder={'description'}
      />
      <Button text='add' onPress={this.onAddPress} />
      <Button text='cancel' onPress={this.onCancelPress} />
    </Container>
  },
  onAddPress(){

  },
  onCancelPress(){
    this.props.navigator.pop();
  }
});

var styles = StyleSheet.create({
})
