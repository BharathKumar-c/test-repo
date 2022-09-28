import React, { useEffect, useRef } from 'react';
import { Animated, Image, StyleSheet, Text, View } from 'react-native';
import { assets, COLORS, FONT_WEIGHT, SIZES } from '../constants';

const Splash = () => {
  const moveAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.spring(moveAnim, {
      toValue: 190,
      duration: 1000,
      friction: 4,
      tension: 10,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <>
      <View style={styles.container}>
        <Animated.View style={[styles.logo, { translateY: moveAnim }]}>
          <Image source={assets.logo} style={styles.logo} />
        </Animated.View>
        <Text style={styles.text}>A digital pension</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background.primary,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    top: -100,
    width: 80,
    height: 80,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  text: {
    fontFamily: 'PlayfairDisplay-Regular',
    fontSize: SIZES.semiLarge,
    fontWeight: FONT_WEIGHT.bold,
    lineHeight: SIZES.extraLarge,
    letterSpacing: 0,
    textAlign: 'center',
    color: '#2B2928',
  },
});

export default Splash;
