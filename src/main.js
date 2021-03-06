import React, { Component } from 'react';
import {
  Navigator,
  StyleSheet
} from 'react-native';
import {app} from './common/firebaseapp';
import Signin from './auth/signin';
import Signup from './auth/signup';
import ItemList from './todo/itemlist';
import ItemDetail from './todo/itemdetail';
import ItemUpdate from './todo/itemupdate';
const ROUTES = {
  signin: Signin,
  signup: Signup,
  itemlist: ItemList,
  itemdetail: ItemDetail,
  itemupdate: ItemUpdate,
};

module.exports = React.createClass({
  renderScene(route, navigator) {
    var Component = ROUTES[route.name];
    return <Component route={route} navigator={navigator} />;
  },
  render(){
    var user = app.auth().currentUser;
    return <Navigator
             style={styles.container}
             initialRoute={{ name: (user ? 'itemlist' : 'signin') }}
             renderScene={this.renderScene}
             configureScene={() => { return Navigator.SceneConfigs.FloatFromRight; }} />
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
