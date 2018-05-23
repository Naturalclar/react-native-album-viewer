import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';

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
        <AlbumDetail key={album.title} album={album}/>
      );
    });
  }

  render() {
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  } 
}

export default AlbumList;