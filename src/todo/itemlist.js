import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ListView
} from 'react-native';
import Button from '../common/button';
import TodoItem from '../common/todoitem';
import Container from '../common/container';
import TextInput from '../common/textinput';
import {app, database} from '../common/firebaseapp';

module.exports = React.createClass({
  componentWillMount(){
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.setState({
      dataSource: ds.cloneWithRows([]),
    });
    console.log('will mount!');
  },
  componentDidMount(){
    var dbRef = database.ref().child('todoitems').once('value').then((snap) => {
      var todoitems = [];
      snap.forEach((item) => {
        todoitems.push(item.val().title);
      });

      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(todoitems),
      });
    })
  },
  render(){
    return <Container>
      <TextInput />
      <ListView
        style={styles.listview}
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <TodoItem text={rowData} onPress={this.onItemPress}/>}
      />
      <View style={styles.footer}>
        <Button text='signout' onPress={this.onSignoutPress} />
        <Button text='add' onPress={this.onAddPress} />
      </View>
    </Container>
  },
  onItemPress(){
    this.props.navigator.push({name: 'itemdetail'});
  },
  onSignoutPress(){
    app.auth().signOut().then(
      () => {
        this.props.navigator.immediatelyResetRouteStack([{name: 'signin'}]);
      },
      (error) => {
        console.log('Unable sign out');
      }
    )
  },
  onAddPress(){
    this.props.navigator.push({name: 'itemupdate'});
  },
  border(color){
    return {
      borderColor: color,
      borderWidth: 6,
    }
  }
});

var styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    alignSelf: 'stretch'
  },
  listview: {
    alignSelf: 'stretch'
  }
})
