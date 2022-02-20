import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import MyAppText from '../components/MyAppText';
import {
  GREY,
  OFF_BLACK,
  WHITE,
  BLACK,
  GREY_SECONDARY,
} from '../constants/colors';
import {FONT_SIZE_XXLARGE} from '../constants/fontSize';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {mediaJSON} from '../data/dummyData';
import GoogleCast, {
  useRemoteMediaClient,
  useStreamPosition,
} from 'react-native-google-cast';
import {trackActionCreators} from '../state';
import {bindActionCreators} from 'redux';

export default function MediaPlayer() {
  const client = useRemoteMediaClient();
  const streamPosition = useStreamPosition();
  const {trackUrl, trackId, thumb, trackTitle, trackSubtitle} = useSelector(
    state => state.track,
  );
  const dispatch = useDispatch();
  const {trackAction} = bindActionCreators(trackActionCreators, dispatch);
  const [play, setPlay] = React.useState(true);
  const [loading, setLoading] = React.useState(true);
  const playHandler = () => {
    if (play && client) {
      client.pause();
      setPlay(!play);
    } else if (!play && client) {
      client.play();
      setPlay(!play);
    }
  };
  console.log(typeof streamPosition)
  console.log(streamPosition)
  const previousHandler = () => {
    client.queuePrev();
    // for (var i = 0; i < mediaJSON.length; i++) {
    //   const items = mediaJSON;
    //   if (items[i].id === trackId && i > 0) {
    //     const payload = {
    //       trackUrl: items[i - 1].uri,
    //       trackId: items[i - 1].id,
    //       thumb: items[i - 1].thumb,
    //       trackTitle: items[i - 1].title,
    //       trackSubtitle: items[i - 1].subtitle,
    //     };
    //     trackAction(payload);

    //     break;
    //   } else if(i === 0){
    //     const payload = {
    //       trackUrl: items.slice(-1).pop().uri,
    //       trackId: items.slice(-1).pop().id,
    //       thumb: items.slice(-1).pop().thumb,
    //       trackTitle: items.slice(-1).pop().title,
    //       trackSubtitle: items.slice(-1).pop().subtitle,
    //     };
    //     trackAction(payload);
    //     setPlay(true);
    //   }
    // }
  };
  const nextHandler = () => {
    const items = mediaJSON;
    for (var i = 0; i < mediaJSON.length; i++) {
      if (items[i].id === trackId && i < items.length - 1) {
        const payload = {
          trackUrl: items[i + 1].uri,
          trackId: items[i + 1].id,
          thumb: items[i + 1].thumb,
          trackTitle: items[i + 1].title,
          trackSubtitle: items[i + 1].subtitle,
        };
        trackAction(payload);
        break;
      } else if (i === items.length - 1) {
        const payload = {
          trackUrl: items[0].uri,
          trackId: items[0].id,
          thumb: items[0].thumb,
          trackTitle: items[0].title,
          trackSubtitle: items[0].subtitle,
        };
        trackAction(payload);
        break;
      }
    }
    setPlay(true);
  };
  return (
    <View style={styles.container}>
      <Image source={{uri: thumb}} style={styles.image} />
      <View>
        <MyAppText style={styles.heading}>{trackTitle}</MyAppText>
        <MyAppText style={styles.subHeading}>{trackSubtitle}</MyAppText>
      </View>
      <View style={styles.controlsContainer}>
        <Pressable onPress={() => previousHandler()}>
          <Icon name="skip-previous" size={35} color={WHITE} />
        </Pressable>
        <Pressable onPress={() => playHandler()}>
          <View style={styles.playButton}>
            {!play && streamPosition!=null && (
              <Icon name="play" size={45} color={WHITE} />
            )}

            {play && typeof streamPosition!='object' && (
              <Icon name="pause" size={45} color={WHITE} />
            )}
            {typeof streamPosition=='object' && (
              <ActivityIndicator  color={WHITE} />
            )}
          </View>
        </Pressable>
        <Pressable onPress={() => nextHandler()}>
          <Icon name="skip-next" size={35} color={WHITE} />
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: BLACK,
  },
  controlsContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  heading: {
    fontSize: FONT_SIZE_XXLARGE,
    fontWeight: '600',
    marginVertical: 5,
  },
  playButton: {
    width: 60,
    height: 60,
    borderRadius: 60,
    backgroundColor: GREY_SECONDARY,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 10,
  },
});
