import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet
} from 'react-native';
import Button from '../common/button';
import Firebase from 'firebase';

var config = {
    apiKey: 'AIzaSyBwgzgXtuLnWWcx7AMq808Q67Kdnr0WS_Q',
    authDomain: 'todo-56000.firebaseapp.com',
    databaseURL: 'https://todo-56000.firebaseio.com',
    storageBucket: 'todo-56000.appspot.com',
    messagingSenderId: "1048964196750"
  };

var app = Firebase.initializeApp(config);

module.exports = React.createClass({
  componentWillMount(){
    this.setState({
      username: '',
      password: '',
      errorMessage: '',
    })
  },
  render(){
    return <View style={styles.container}>
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
      <Button text='Sign in' onPress={this.signinPressed}/>
      <Button text='Sign up' onPress={this.signupPressed}/>
    </View>
  },
  signinPressed(){
    this.props.navigator.immediatelyResetRouteStack([{name: 'todolist'}]);
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