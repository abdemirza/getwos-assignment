import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { FONT_SIZE_MEDIUM } from '../constants/fontSize'
import { WHITE } from '../constants/colors';

export default function MyAppText(props) {
    const {children,style} = props;
  return (
      <Text style={[styles.text,style]}>{children}</Text>
  )
}
const styles = StyleSheet.create({
    text:{
        fontSize:FONT_SIZE_MEDIUM,
        color:WHITE,
    }
})