import {View, StyleSheet, Image, Pressable} from 'react-native';
import React from 'react';
import {BLACK, OFF_BLACK, WHITE} from '../constants/colors';
import MyAppText from './MyAppText';
import {FONT_SIZE_XLARGE} from '../constants/fontSize';
import Icon from 'react-native-vector-icons/Entypo';
import {useDispatch} from 'react-redux';
import {trackActionCreators} from '../state';
import {bindActionCreators} from 'redux';
import GoogleCast, {
  CastButton,
  useRemoteMediaClient,
  
} from 'react-native-google-cast';
import { useNavigation } from '@react-navigation/native';

export default function Track(props) {
  const client = useRemoteMediaClient();
  const {
    title = 'Heat Waves',
    trackSubtitle = 'Glass Animals',
    trackNo = '1',
    trackUrl,
    thumb,
    trackId,
  } = props;
  const dispatch = useDispatch();
  const {trackAction} = bindActionCreators(trackActionCreators, dispatch);
  const navigation = useNavigation();
 
  const onPressHandler = () => {
    trackAction({trackUrl,trackId,thumb,trackTitle:title,trackSubtitle});
    navigation.navigate('Player');
  };
  return (
    <Pressable onPress={() => onPressHandler()} style={styles.container}>
      <View style={styles.row}>
        <Image
          source={{
            uri: thumb,
          }}
          style={styles.image}
        />
        <MyAppText style={[styles.trackTitle, styles.trackNo]}>
          {trackNo}
        </MyAppText>

        <View style={styles.textContainer}>
          <MyAppText style={styles.trackTitle}>{title}</MyAppText>
          <MyAppText style={styles.trackDetails}>{trackSubtitle}</MyAppText>
        </View>
      </View>

      <View style={styles.menuContainer}>
        <Icon
          name="dots-three-vertical"
          size={FONT_SIZE_XLARGE}
          color={WHITE}
        />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: OFF_BLACK,
    height: 75,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderBottomColor: WHITE,
  },
  trackTitle: {
    fontSize: FONT_SIZE_XLARGE,
    color: WHITE,
    fontWeight: '600',
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 5,
  },
  trackNo: {
    marginLeft: 10,
  },
  textContainer: {
    marginHorizontal: 5,
  },
  menuContainer: {
    marginRight: 10,
  },
  row: {
    flexDirection: 'row',
  },
});
