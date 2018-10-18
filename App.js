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
      <FlatList style={styles.container}
        keyExtractor={item => String(item.id)}
        data={fotos}
        renderItem={({item}) =>
          <View>
            <View style={styles.header}>
              <Image source={require('./resources/img/person.png')} style={styles.profilePhoto} />  
              <Text>{item.usuario}</Text>
            </View>
            <Image source={require('./resources/img/person.png')} style={styles.postPhoto} />
          </View>
        }
      />
    );  
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30
  },
  header: {
    margin: 10, 
    flexDirection: 'row', 
    alignItems: 'center'
  },
  profilePhoto: {
    marginRight: 10, 
    borderRadius: 20, 
    width: 40, 
    height: 40
  },
  postPhoto: {
    width: width, 
    height: height
  }
});
