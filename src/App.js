import React from 'react';
import { View } from 'react-native';
import AlbumList from './components/AlbumList';
import { Header } from './components/common';

const App = () => (
  <View>
    <Header title="Albums" />
    <AlbumList />
  </View>
);

export default App;
