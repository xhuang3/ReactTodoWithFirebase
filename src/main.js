import React, { Component } from 'react';
import {
  Navigator,
  StyleSheet
} from 'react-native';
import Signin from './signin/signin';
import Signup from './signin/signup';
import TodoList from './todo/todolist';
import TodoItemDetail from './todo/todoitemdetail';

var ROUTES = {
  signin: Signin,
  signup: Signup,
  todolist: TodoList,
  todoitemdetail: TodoItemDetail,
};

module.exports = React.createClass({
  renderScene(route, navigator) {
    var Component = ROUTES[route.name];
    return <Component route={route} navigator={navigator} />;
  },
  render(){
    return <Navigator 
             style={styles.container} 
             initialRoute={{name: 'signin'}}
             renderScene={this.renderScene}
             configureScene={() => { return Navigator.SceneConfigs.FloatFromRight; }} />
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});