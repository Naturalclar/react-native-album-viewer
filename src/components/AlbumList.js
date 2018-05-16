import React, { Component } from 'react';
import { View, Text } from 'react-native';
import AlbumDetail from './AlbumDetail';
import Card from './Card';

class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    const url = 'https://rallycoding.herokuapp.com/api/music_albums';
    fetch(url)
    .then(response => response.json())
    .then(data => this.setState({ albums: data }));
  }

  renderAlbums() {
    return this.state.albums.map(album => {
      return (
        <Card>
          <AlbumDetail key={album.title} title={album.title}/>
        </Card>
      );
    });
  }

  render() {
    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  } 
}

export default AlbumList;