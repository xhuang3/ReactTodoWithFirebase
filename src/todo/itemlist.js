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

module.exports = React.createClass({
  componentWillMount(){
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.setState({
      dataSource: ds.cloneWithRows(['row 1', 'row2']),
    });
  },
  render(){
    return <Container>
      <ListView
        style={[styles.listview, this.border('green')]}
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <TodoItem text={rowData} onPress={this.onItemPress}/>}
      />
      <View style={[styles.footer, this.border('red')]}>
        <Button text='signout' onPress={this.onSignoutPress} />
        <Button text='add' onPress={this.onAddPress} />
      </View>
    </Container>
  },
  onItemPress(){
    this.props.navigator.push({name: 'todoitemdetail'});
  },
  onSignoutPress(){
    this.props.navigator.immediatelyResetRouteStack([{name: 'signin'}]);
  },
  onAddPress(){
    this.props.navigator.push({name: 'todoitemdetail'});
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
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 10,
    paddingLeft: 10,
  },
  listview: {
    flex: 12,
  }
})