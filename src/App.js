/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions, Image, FlatList} from 'react-native';
import Post from './components/Post'

/*
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});*/

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      fotos: []
    }
  }

  componentDidMount() {
    
    fetch('http://localhost:8080/api/public/fotos/marcus')
      .then(resposta => resposta.json())
      .then(json => this.setState({fotos: json}))
      .catch(e => {
        console.warn('The photos were not loaded: ' + e);
        this.setState({status: 'ERRO'})
      });
  }

  render() {
    return (
      <FlatList style={styles.container}
        data={this.state.fotos}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => 
          <Post foto={item} />
        }
      />
    );  
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30
  }
});
