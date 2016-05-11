import { View, StyleSheet, Dimensions, Text } from 'react-native';
import React from 'react';

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  bar: {
    width,
    backgroundColor: '#efefef',
    position: 'absolute',
    bottom: 1,
    height: 50
  },
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  tab: {
    flex: 1,
    borderRightColor: 'blue',
    borderRightWidth: 2,
    borderStyle: 'solid'
  }
});

export const TabBar = (props) => (
  <View style={styles.bar}>
    <View style={styles.container}>
      {props.tabs.map(tab => (
        <View style={styles.tab}>
          <Text>
            {tab.name}
          </Text>
        </View>
      ))}
    </View>
  </View>
);
