import React, { Component } from 'react';

import {
  Text,
  View,
  StyleSheet,
  Image,
  WebView
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F6EF",
    flexDirection: 'column'
  }
});

export default class Web_View extends Component{
  render() {
    return (
      <View style={styles.container}>
        <WebView url={this.props.url} />
      </View>
    );
  }
};

Web_View.propTypes = {
  url: React.PropTypes.string.isRequired
}
