import React, { Component } from 'react';
import { TabBar } from '../components/TabBar';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import times from 'lodash/times';

const mergeState = (state) => ({
  isTabBarVisible: state.ui.tabBarVisibile
});

const styles = StyleSheet.create({
  main: {
    flex: 1
  }
});

const tabs = times(5, i => ({ name: i }));

class MainComponent extends Component {
  hideTabBar() {}

  render() {
    return (
      <View style={styles.main}>
        <TabBar
          tabs={tabs}
          visible={this.props.isTabBarVisible}
        />
      </View>
    );
  }
}

export const Main = connect(mergeState)(MainComponent);
