import {View, Text} from 'react-native';
import React from 'react';
import { mediaJSON } from '../data/dummyData';
import Track from './Track';

export default function Tracks() {
  const tracks = mediaJSON.map((track, index) => {
    return (
      <Track
        key={index}
        title={track.title}
        trackNo={index + 1}
        subTitle={track.subtitle}
        trackUrl={track.uri}
        trackId={track.id}
        thumb={track.thumb}
        uri={track.image}
      />
    );
  });
  return <View>{tracks}</View>;
}
