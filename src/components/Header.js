import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Cast from './Cast';
import { OFF_BLACK, WHITE } from '../constants/colors';
import { FONT_SIZE_XXLARGE } from '../constants/fontSize';

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Cast your music</Text>
      <Cast  />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: OFF_BLACK,
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal:20,
  },
  heading: {
    fontSize: FONT_SIZE_XXLARGE,
    color:WHITE,
    marginRight:20,
  },
  cast:{
      paddingHorizontal:10,
  }
});
