import React from 'react';
import {
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Box, AbstractButton } from '../components';
import { COLORS, assets, FONTS, FONT_WEIGHT } from '../constants';

interface Props {}

function SignIn(props: Props) {
  const {} = props;

  return (
    <Box style={styles.container}>
      <Box flex={1} pl={20} pt={40}>
        <Box>
          <Image source={assets.logo} style={styles.logo} />
        </Box>
        <Box>
          <Text style={styles.titleText}>Welcome back to Marshmallow</Text>
        </Box>

        <Box mt={40}>
          <Box width="100%">
            <Box width="90%">
              <Text style={styles.label}>EMAIL</Text>
              <Box>
                <TextInput style={styles.textInput} />
              </Box>
            </Box>
          </Box>

          <Box marginTop={20} width="100%">
            <Box width="90%">
              <Text style={styles.label}>PASSWORD</Text>
              <Box>
                <TextInput style={styles.textInput} secureTextEntry />
              </Box>
            </Box>
          </Box>

          <Box mt={20}>
            <TouchableOpacity>
              <Text style={styles.forgotPassword}>Forgot password?</Text>
            </TouchableOpacity>
          </Box>
        </Box>
      </Box>
      <Box
        mb={20}
        alignItems="center"
        justifyContent="center"
        alignSelf="center"
        width="100%">
        <AbstractButton>Sign In</AbstractButton>
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background.primary,
  },
  titleText: {
    color: 'black',
    fontFamily: 'Playfair Display',
    fontWeight: FONT_WEIGHT.bold,
    fontSize: 28,
  },
  logo: {
    height: 40,
    width: 40,
    padding: 10,
    margin: 10,
  },
  textInput: {
    height: 40,
    width: '100%',
    borderRadius: 1,
    borderBottomWidth: 2,
    borderColor: '#00000010',
  },
  label: {
    fontWeight: FONT_WEIGHT.bold,
    fontFamily: FONTS.Merriweather,
    color: COLORS.lightGray,
    fontSize: 12,
    lineHeight: 18,
    letterSpacing: 0.1,
  },
  forgotPassword: {
    fontFamily: FONTS.Merriweather,
    fontWeight: FONT_WEIGHT.bold,
    color: COLORS.green,
    lineHeight: 20,
    letterSpacing: -0.1,
  },
});

export default SignIn;
