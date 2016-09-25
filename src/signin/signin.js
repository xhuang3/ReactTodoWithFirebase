import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet
} from 'react-native';
import Button from '../common/button';
import {
  app,
} from '../common/firebaseapp';
import Container from '../common/container';

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
        value={this.state.username} 
        style={styles.textinput}
        onChangeText={(text) => this.setState({username: text})}/>
      <TextInput value={this.state.password}
        secureTextEntry={true}
        style={styles.textinput}
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