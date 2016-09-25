import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
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
      username: '',
      password: '',
      errorMessage: '',
    })
  },
  render(){
    return <Container>
      <Text>
        TODO
      </Text>
      <TextInput
        placeholder={'email'}
        onChangeText={(text) => this.setState({username: text})}/>
      <TextInput
        placeholder={'password'}
        secureTextEntry={true}
        onChangeText={(text) => this.setState({password: text})}/>
      <Text>{this.state.errorMessage}</Text>
      <Button text='Sign in' onPress={this.signinPressed}/>
      <Button text='Sign up' onPress={this.signupPressed}/>
    </Container>
  },
  signinPressed(){
    app.auth().signInWithEmailAndPassword(this.state.username, this.state.password).then(
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
  signupPressed(){
    this.props.navigator.push({name: 'signup'});
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textinput: {
    height: 40,
    width: 200,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    alignSelf: 'center',
  }
})
