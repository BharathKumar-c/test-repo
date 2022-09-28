import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ReactNativeBiometrics from 'react-native-biometrics';
import * as Keychain from 'react-native-keychain';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList>;

function Login({ navigation }: Props) {
  const goToDashBoard = () => {
    navigation.navigate('Dashboard');
  };

  useEffect(() => {
    ReactNativeBiometrics.isSensorAvailable().then(resultObject => {
      const { available, biometryType } = resultObject;
      console.log({ available, biometryType });
      if (available) {
        ReactNativeBiometrics.simplePrompt({
          promptMessage: 'Confirm fingerprint',
        })
          .then(result => {
            const { success } = result;

            if (success) {
              goToDashBoard();

              console.log('successful biometrics provided');
            } else {
              console.log('user cancelled biometric prompt');
            }
          })
          .catch(() => {
            console.log('biometrics failed');
          });
      } else {
        console.log('sesnor is not available');
      }
    });
  }, []);

  /*   useEffect(() => {
    (async () => {
      const username = 'vignesh';
      const password = '34e1a3f5';
      const result = await Keychain.setGenericPassword(username, password, {
        accessControl: Keychain.ACCESS_CONTROL.BIOMETRY_ANY_OR_DEVICE_PASSCODE,
        accessible: Keychain.ACCESSIBLE.ALWAYS,
        authenticationType:
          Keychain.AUTHENTICATION_TYPE.DEVICE_PASSCODE_OR_BIOMETRICS,
      });
      console.log({ result });
      // await Keychain.resetGenericPassword();
      const resut = await Keychain.getGenericPassword();
      console.log({ resut });
      const all = await Keychain.getAllGenericPasswordServices();
      console.log({ all });
    })();
  }, []); */

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: {
    color: 'black',
    fontFamily: 'Playfair Display',
    fontWeight: '700',
    fontSize: 28,
  },
});

export default Login;
