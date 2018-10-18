/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions, Image, FlatList} from 'react-native';

const width = Dimensions.get('screen').width;
const height = width;

/*
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});*/

type Props = {};
export default class App extends Component<Props> {
  render() {
    const fotos = [
      {id: 1, usuario: 'Marcus'},
      {id: 2, usuario: 'Daniella'},
      {id: 3, usuario: 'Lizarralde'}
    ];
    return (
      <FlatList style={{marginTop: 30}}
        keyExtractor={item => String(item.id)}
        data={fotos}
        renderItem={({item}) =>
          <View>
            <Text>{item.usuario}</Text>
            <Image source={require('./resources/img/person.png')}
              style={{width: width, height: height}} />
          </View>
        }
      />
    );  
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
