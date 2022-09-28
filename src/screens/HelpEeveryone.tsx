import React from 'react';
import { Image, StatusBar, StyleSheet, Text } from 'react-native';
import { Box } from '../components';
import { assets, FONTS, SIZES, COLORS } from '../constants';

const HelpEeveryone = () => {
  return (
    <Box style={styles.container}>
      <StatusBar backgroundColor="#A4B9AB" barStyle="dark-content" />
      <Box flex={1} pl={20} pt={40}>
        <Box>
          <Image source={assets.logo} style={styles.logo} />
        </Box>
        <Box style={styles.titleContainer}>
          <Text style={styles.titleText}>
            Help everyone enjoy a happy retirement
          </Text>
        </Box>
        <Box>
          <Image source={assets.DividerIcon} style={styles.dividerIcon} />
        </Box>
        <Box>
          <Image source={assets.Frame2} style={styles.frame2} />
        </Box>
        <Box style={styles.signinBox}>
          <Text style={styles.signinText}>Already have account? Sign in</Text>
        </Box>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A4B9AB',
  },
  titleText: {
    color: COLORS.black,
    fontFamily: FONTS.PlayfairDisplayBold,
    fontSize: SIZES.extraLarge,
    textAlign: 'center',
    lineHeight: 30,
    letterSpacing: 0,
    width: 269,
    height: 60,
  },
  titleContainer: {
    left: '14.13%',
    right: '14.13%',
    top: '5%',
    bottom: '74.51%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
  },
  logo: {
    height: 36,
    width: 36,
    left: 170,
    right: 169,
  },
  dividerIcon: {
    width: 42,
    height: 4,
    left: 167,
    top: 90,
  },
  frame2: {
    width: 270,
    height: 278,
    left: 53,
    top: 150,
  },
  signinBox: {
    top: '35.63%',
  },
  signinText: {
    fontFamily: FONTS.Merriweather,
    fontStyle: 'normal',
    fontSize: 12,
    lineHeight: 21,
    textAlign: 'center',
    color: COLORS.black,
  },
});

export default HelpEeveryone;
