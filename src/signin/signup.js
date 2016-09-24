import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput
} from 'react-native';

import Button from '../common/button';
import app from '../common/firebaseimp';

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
    return <View style={styles.container}>
      <Text>Sign Up</Text>
      <TextInput
        value={this.state.email}
        onChangeText={(text) => this.setState({email: text})}
        style={styles.input}/>
      <TextInput
        value={this.state.password}
        onChangeText={(text) => this.setState({password: text})}
        style={styles.input}/>
      <TextInput
        value={this.state.confirmPassword}
        onChangeText={(text) => this.setState({confirmPassword: text})}
        style={styles.input}/>
      <Text>{this.state.errorMessage}</Text>
      <Button text='Sign up' onPress={this.onSignupPress} />
      <Button text='Return to sign in' onPress={this.onSigninPress} />
    </View>
  },
  onSignupPress(){
    if(this.state.password !== this.state.confirmPassword){
      this.setState({
        errorMessage: "Password not matched",
      })
      return;
    }
    
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
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