import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  Image
} from 'react-native';
//import AnimatedLoader from 'react-native-animated-loader';

export default class LoadScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };
  }
  render() {
   
    return (
      <View style={[styles.container]}>
         <Image source={require('../assets/milkyway.jpg')} style={{ width: '100%', height: '100%', position: 'absolute' }} />
         <View style={[ styles.horizontal]}>
            <ActivityIndicator size="large" color="#00ff00" />
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center'
  },
  horizontal: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
})
