// In App.js in a new project

import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Navigation from './navigation';
import Splash from './screens/Splash';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Navigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
