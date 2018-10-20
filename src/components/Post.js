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

export default class Post extends Component {
  render() {
    return (
        <View>
            <View style={styles.header}>
                <Image source={{uri: this.props.foto.urlPerfil}} 
                    style={styles.profilePhoto} />  
                <Text>{this.props.foto.loginUsuario}</Text>
            </View>
            <Image source={{uri: this.props.foto.urlFoto}} 
                style={styles.postPhoto} />
        </View>
    );  
  }
}

const styles = StyleSheet.create({
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
