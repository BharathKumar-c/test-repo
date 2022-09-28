export const COLORS = {
  background: {
    primary: '#F2F2EF',
    secondary: '#4D626C',
  },
  white: '#FFF',
  black: '#000000',
  lightGray: '#747474',
  green: '#1A6A73',
};

export const SIZES = {
  base: 8,
  small: 12,
  font: 14,
  medium: 16,
  large: 18,
  semiLarge: 20,
  extraLarge: 24,
};

type fontWeights =
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | undefined;

type fontWeightObj = {
  bold: fontWeights;
};

export const FONT_WEIGHT: fontWeightObj = {
  bold: '700',
};

export const FONTS = {
  Merriweather: 'Merriweather Sans',
  PlayfairDisplay: 'PlayfairDisplay',
  PlayfairDisplayBold: 'PlayfairDisplay-Bold',
  PlayfairDisplayExBold: 'PlayfairDisplay-ExtraBold',
};
