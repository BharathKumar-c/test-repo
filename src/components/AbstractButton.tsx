import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { Box } from '../components';
import { COLORS, FONTS, FONT_WEIGHT } from '../constants';

interface Props {
  children: React.ReactNode;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
}

function AbstractButton(props: Props) {
  const { children, buttonStyle = {}, textStyle = {} } = props;

  return (
    <TouchableOpacity style={[styles.buttonStyle, buttonStyle]}>
      <Box backgroundColor={COLORS.black}>
        <Text style={[styles.textStyle, textStyle]}>{children}</Text>
      </Box>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    width: '90%',
    backgroundColor: COLORS.black,
  },
  textStyle: {
    color: COLORS.white,
    fontFamily: FONTS.Merriweather,
    fontWeight: FONT_WEIGHT.bold,
    fontSize: 14,
  },
});

export default AbstractButton;
