import { View, Text } from 'react-native'
import React from 'react'
import Slider from 'react-native-slider';
import { GREY, WHITE } from '../constants/colors';
import { useRemoteMediaClient, useStreamPosition } from 'react-native-google-cast';

export default function SongSlider() {
  const client = useRemoteMediaClient();
  const [totalDuration,setTotalDuration] = React.useState(0);
  const [value,setValue] = React.useState(0);
    const streamPosition = useStreamPosition();
    const onChangeHandler = (value) => {
        if (client) {
           client.seek({
            position: value * totalDuration
           });
        }
    }
    if(client && streamPosition) {
    client.getMediaStatus().then(mediaStatus => {
        setTotalDuration(mediaStatus.mediaInfo.streamDuration);
        setValue(streamPosition/parseFloat(mediaStatus.mediaInfo.streamDuration))
    })
}
  return (
    <Slider value={value||0} onValueChange={(value)=>onChangeHandler(value)} thumbTintColor={WHITE} minimumTrackTintColor={WHITE} maximumTrackTintColor={GREY} />
  )
}