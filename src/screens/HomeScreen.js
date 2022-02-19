import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import Tracks from '../components/Tracks';
import Header from '../components/Header';
import {useSelector} from 'react-redux';

export default function HomeScreen() {
  const {trackUrl, trackId, thumb, trackTitle} = useSelector(
    state => state.track,
  );
  console.log('track title', trackTitle);
  return (
    <View style={{flex: 1}}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={true} style={{flex: 1}}>
        <Tracks />
      </ScrollView>
    </View>
  );
}
