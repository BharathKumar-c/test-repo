/* -----------------Globals--------------- */
import React from 'react';
import { View, ViewStyle, LayoutChangeEvent } from 'react-native';

/* -----------------Props--------------- */
interface Props {
  children?: React.ReactNode;
  onLayout?: any;
  zIndex?: number;
  borderColor?: any;
  borderWidth?: any;
  borderStyle?: 'solid' | 'dotted' | 'dashed';
  borderRadius?: number;
  minWidth?: number;
  maxWidth?: number;
  borderRoundness?: number;
  display?: 'none' | 'flex';
  height?: number | string;
  width?: number | string;
  position?: 'relative' | 'absolute';
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  justifyContent?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  alignItems?: 'stretch' | 'center' | 'flex-start' | 'flex-end' | 'baseline';
  alignSelf?: 'flex-start' | 'flex-end' | 'center' | 'stretch';
  padding?: number;
  paddingVertical?: number;
  paddingHorizontal?: number;
  paddingTop?: number;
  paddingRight?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  margin?: number;
  overflow?: string;
  marginVertical?: number;
  marginHorizontal?: number;
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  marginLeft?: number;
  color?: string;
  fontColor?: string;
  pointerEvents?: any;
  backgroundColor?: string;
  flex?: number;
  flexWrap?: 'wrap' | 'nowrap';
  flexGrow?: number;
  flexBasis?: any;
  alignContent?: 'center';
  style?: ViewStyle | ViewStyle[];
  p?: number;
  pv?: number;
  ph?: number;
  pt?: number;
  pr?: number;
  pb?: number;
  pl?: number;
  m?: number;
  mv?: number;
  mh?: number;
  mt?: number;
  mr?: number;
  mb?: number;
  ml?: number;
}

/* -----------------Component--------------- */
const Box = (props: Props) => {
  const { children, onLayout, pointerEvents, style = {}, ...rest } = props;

  const handleOnLayout = (e: LayoutChangeEvent) => {
    if (onLayout) {
      onLayout(e);
    }
  };

  if (rest?.p) {
    rest.padding = rest?.p;
  }

  if (rest?.pv) {
    rest.paddingVertical = rest?.pv;
  }

  if (rest?.ph) {
    rest.paddingHorizontal = rest?.ph;
  }

  if (rest?.pt) {
    rest.paddingTop = rest?.pt;
  }
  if (rest?.pr) {
    rest.paddingRight = rest?.pr;
  }
  if (rest?.pb) {
    rest.paddingBottom = rest?.pb;
  }
  if (rest?.pl) {
    rest.paddingLeft = rest?.pl;
  }
  if (rest?.m) {
    rest.margin = rest?.m;
  }

  if (rest?.mv) {
    rest.marginVertical = rest?.mv;
  }

  if (rest?.mh) {
    rest.marginHorizontal = rest?.mh;
  }

  if (rest?.mt) {
    rest.marginTop = rest?.mt;
  }

  if (rest?.mr) {
    rest.marginRight = rest?.mr;
  }
  if (rest?.mb) {
    rest.marginBottom = rest?.mb;
  }

  if (rest?.ml) {
    rest.marginLeft = rest?.ml;
  }

  const tempStyle = Array.isArray(style)
    ? Object.assign.apply(Object, style)
    : style;

  return (
    <View
      //@ts-ignore
      // eslint-disable-next-line react-native/no-inline-styles
      style={[{ ...rest }, { display: 'flex' }, { ...tempStyle }]}
      onLayout={handleOnLayout}
      pointerEvents={pointerEvents}>
      {children}
    </View>
  );
};

export default Box;
