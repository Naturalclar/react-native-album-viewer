import React from 'react';
import { View, AppRegistry }  from 'react-native';
import {Header, AlbumList} from './src/components';

// Create Component
const App = () => {
  return (
    <View>
      <Header title={'Hello World!'}/>
      <AlbumList/>
    </View>
  )
};

// Render Component
AppRegistry.registerComponent('albums', () => App);