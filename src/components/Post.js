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
  StyleSheet, Text, TextInput, View, Dimensions, Image, 
  FlatList, TouchableOpacity} from 'react-native';

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
      post: this.props.foto,
      comentarioValue: ''
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
        return liker.name !== 'Marcus' // TODO: refactor
      })
    } else {
      likedList = [
        ...post.likers,
        {name: 'Marcus'} // TODO: refactor
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
    if (post.comentario == '')
      return;

    return (
      <View style={styles.comments}>
          <Text style={styles.commentsTitle}>{post.loginUsuario}</Text>
          <Text>{post.comentario}</Text>
      </View>
    );
  }

  adicionaComentario() {
    if (this.state.comentarioValue === '') {
      return;
    }

    const comentariosAtualizado = [...this.state.post.comentarios, {
      id: this.state.comentarioValue, // TODO: refactor
      login: 'marcus', // TODO: refactor
      texto: this.state.comentarioValue
    }];

    const postAtualizado = {
      ...this.state.post,
      comentarios: comentariosAtualizado
    }

    this.setState({post: postAtualizado, comentarioValue: ''});
    this.inputComentario.clear();
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

              {post.comentarios.map(comentario =>
                <View style={styles.comments} key={comentario.id}>
                  <Text style={styles.commentsTitle}>{comentario.login}</Text>
                  <Text>{comentario.texto}</Text>
                </View>
                )}
                
              <View style={styles.novoComentario}>
                <TextInput style={styles.input} placeholder="Adicione um comentário..." 
                  ref={input => this.inputComentario = input} 
                  onChangeText={valor => this.setState({comentarioValue: valor})} />
                
                <TouchableOpacity onPress={this.adicionaComentario.bind(this)}>
                  <Image style={styles.icone} source={require('../../resources/img/send.png')} /> 
                </TouchableOpacity>
              </View>
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
  },
  novoComentario: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },
  input: {
    flex: 1,
    height: 40
  },
  icone: {
    width: 30,
    height: 30
  }

});
