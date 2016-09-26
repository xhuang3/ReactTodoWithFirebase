import React, {Component} from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import Container from '../common/container';
import Label from '../common/label';
import TextInput from '../common/textinput';
import Button from '../common/button';
import {database} from '../common/firebaseapp';

module.exports = React.createClass({
  componentWillMount(){
    this.setState({
      title: '',
      description: '',
    });
  },
  render(){
    return <Container>
      <Label text='Add new item'/>
      <TextInput
        placeholder={'title'}
        onChangeText={(text) => this.setState({title: text})}/>
      <TextInput
        placeholder={'description'}
        onChangeText={(text) => this.setState({description: text})}/>
      <Button text='add' onPress={this.onAddPress} />
      <Button text='cancel' onPress={this.onCancelPress} />
    </Container>
  },
  onAddPress(){
    var itemData = {
      title: this.state.title,
      description: this.state.description
    }
    const dbRef = database.ref().child('todoitems');
    dbRef.push(itemData);

    this.props.navigator.pop();
  },
  onCancelPress(){
    this.props.navigator.pop();
  }
});

var styles = StyleSheet.create({
})
