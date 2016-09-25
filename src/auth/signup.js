import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

import Button from '../common/button';
import {
  app,
} from '../common/firebaseapp';
import Container from '../common/container';
import TextInput from '../common/textinput';
module.exports = React.createClass({
  componentWillMount(){
    this.setState({
      email: '',
      password: '',
      confirmPassword: '',
      errorMessage: '',
    })
  },
  render() {
    return <Container>
      <Text>Sign Up</Text>
      <TextInput
        placeholder={'email'}
        onChangeText={(text) => this.setState({email: text})}/>
      <TextInput
        placeholder={'password'}
        secureTextEntry={true}
        onChangeText={(text) => this.setState({password: text})}/>
      <TextInput
        placeholder={'confirm password'}
        secureTextEntry={true}
        onChangeText={(text) => this.setState({confirmPassword: text})}/>
      <Text>{this.state.errorMessage}</Text>
      <Button text='Sign up' onPress={this.onSignupPress} />
      <Button text='Return to sign in' onPress={this.onSigninPress} />
    </Container>
  },
  onSignupPress(){
    if(this.state.password !== this.state.confirmPassword){
      this.setState({
        errorMessage: "Password not matched",
      })
      return;
    }
    // TODO: Show animated progress bar
    app.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(
      (result) => {
        var user = result.user;
        this.props.navigator.immediatelyResetRouteStack([{name: 'todolist'}]);
      },
      (error) => {
        this.setState({
          errorMessage: error.message,
        })
      }
    );
  },
  onSigninPress(){
    this.props.navigator.pop();
  }
});

var styles = StyleSheet.create({
  input: {
    height: 40,
    width: 200,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    alignSelf: 'center',
  }
});
