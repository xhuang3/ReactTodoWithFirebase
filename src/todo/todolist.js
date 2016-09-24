import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ListView
} from 'react-native';
import Button from '../common/button';
import TodoItem from './todoitem';

module.exports = React.createClass({
  componentWillMount(){
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.setState({
      dataSource: ds.cloneWithRows(['row 1', 'row2']),
    });
  },
  render(){
    return <View style={styles.container}>
      <ListView
        style={styles.listview}
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <TodoItem text={rowData} onPress={this.onItemPress}/>}
      />
      <Button text='signout' onPress={this.onSignoutPress} />
    </View>
  },
  onItemPress(){
    this.props.navigator.push({name: 'todoitemdetail'});
  },
  onSignoutPress(){
    this.props.navigator.immediatelyResetRouteStack([{name: 'signin'}]);
  }
});

var styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listview: {
    
  }
})