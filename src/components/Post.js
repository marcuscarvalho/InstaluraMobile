/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform, 
  StyleSheet, Text, View, Dimensions, Image, FlatList, TouchableOpacity} from 'react-native';

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

  constructor(props) {
    super(props);
    this.state = {
      post: this.props.foto 
    }
  }

  loadLikeButton(liked) {
    return liked ? require('../../resources/img/s2-checked.png') 
      : require('../../resources/img/s2.png')
  }

  like() {
    const { post } = this.state;

    let likedList = []
    if (post.liked) {
      likedList = post.likers.filter(liker => {
        return liker.name !== 'Marcus'
      })
    } else {
      likedList = [
        ...post.likers,
        {name: 'Marcus'}
      ]
    }

    const updatedPost = {
      ...post,
      liked: !post.liked,
      likers: likedList
    }
    this.setState({post: updatedPost})
  }

  showLikes(likers) {
    if (likers.length < 1) {
      return;
    }

    return (
      <Text styles={styles.likes}>
        {likers.length} {likers.length > 1 ? 'curtidas' : 'curtida'}
      </Text>
    );
  }

  showComments(post) {
    if (post.comment == '')
      return;

    return (
      <View style={styles.comments}>
          <Text style={styles.commentsTitle}>{post.loginUsuario}</Text>
          <Text>{post.comment}</Text>
      </View>
    );

  }
  
  render() {
    const { post } = this.state;

    return (
        <View>
            <View style={styles.header}>
                <Image source={{uri: post.urlPerfil}} 
                    style={styles.profilePhoto} />  
                <Text>{post.loginUsuario}</Text>
            </View>
            <Image source={{uri: post.urlFoto}} 
                style={styles.postPhoto} />

            <View style={styles.footer}>
              <TouchableOpacity onPress={this.like.bind(this)}>
                <Image style={styles.likeButton} 
                  source={this.loadLikeButton(post.liked)} />  
              </TouchableOpacity>
              {this.showLikes(post.likers)}
              {this.showComments(post)}
            </View> 
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
  },
  likeButton: {
    marginBottom: 10,
    width: 40,
    height: 40
  },
  footer: {
    margin: 10
  },
  likes: {
    fontWeight: 'bold'
  },
  comments: {
    flexDirection: 'row'
  },
  commentsTitle: {
      fontWeight: 'bold',
      marginRight: 5
  }

});
