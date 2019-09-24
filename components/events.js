import React, { Component } from 'react';
import { View, Text,ImageBackground,StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';

export default class EVENTS extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground source={require('../assets/milkyway.jpg')} style={{ width: '100%', height: '100%' }}>
        
        <Card containerStyle={styles.card}>
            <Text style={{ color: 'white' }}>
              "The 21st Century leaders should not be just interested in people reaching goals but stimulate them to use the creative potential to reach their destiny"</Text>
            <Text style={{ textAlign: 'right', color: 'white' }}>-Guru.K.M.Sivaswamy</Text>
          </Card>
          
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  card: {
    backgroundColor: 'transparent',
    backgroundColor: 'rgba(230, 230, 230, 0.4)',
    borderWidth:0
  }
});