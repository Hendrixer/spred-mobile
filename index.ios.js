/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React from 'react';
import { Provider } from 'react-redux';
import { AppRegistry, View, StyleSheet } from 'react-native';
import { Main } from './src/app/containers/Main';
import store from './src/app/store';

const styles = StyleSheet.create({
  main: {
    flex: 1
  }
});

const Spred = () => (
  <Provider store={store}>
    <View style={styles.main}>
      <Main />
    </View>
  </Provider>
);

AppRegistry.registerComponent('spred', () => Spred);
