// @flow
import React from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  Linking,
} from 'react-native';
import { Button, Card, CardSection } from './common';

const styles = StyleSheet.create({
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  headerTextStyle: {
    fontSize: 18,
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null,
  },
});

type Album = {
  title: String,
  artist: String,
  thumbnail_image: String,
  url: String,
}

type Props = {
  album: Album;
}

const AlbumDetail = ({ album }: Props) => {
  const {
    title,
    artist,
    image,
    thumbnail_image: thumbnailImage,
    url,
  } = album;
  const {
    thumbnailStyle,
    headerContentStyle,
    headerTextStyle,
    thumbnailContainerStyle,
    imageStyle,
  } = styles;
  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
            style={thumbnailStyle}
            source={{ uri: thumbnailImage }}
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>
            {title}
          </Text>
          <Text>
            {artist}
          </Text>
        </View>
      </CardSection>
      <CardSection>
        <Image
          style={imageStyle}
          source={{ uri: image }}
        />
      </CardSection>
      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>
          Buy Now
        </Button>
      </CardSection>
    </Card>
  );
};

export default AlbumDetail;
