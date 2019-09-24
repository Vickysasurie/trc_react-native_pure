import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet, Share, Linking, TouchableOpacity } from 'react-native'
import { Card } from 'react-native-elements';


export default class MORE extends React.Component {

  shareMessage() {
    Share.share({
      message: 'TRC | https://play.google.com/store/apps/details?id=com.cloudvalley.trc&hl=en'
    })
      .then(this._showResult)
      .catch((error) => this.setState({ result: 'error: ' + error.message }));
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground source={require('../assets/milkyway.jpg')} style={{ width: '100%', height: '100%' }}>

          <Card containerStyle={styles.card}>
            <TouchableOpacity onPress={() => Linking.openURL('mailto:trc@gmail.com')}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                <Text style={{ color: 'white', textAlign: 'left' }}>
                  Feedback
                </Text>

                <Text style={{ textAlign: 'right', color: 'white' }}>></Text>

              </View>
            </TouchableOpacity>
          </Card>

          <Card containerStyle={styles.card}>
            <TouchableOpacity onPress={() => this.shareMessage()}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                <Text style={{ color: 'white', textAlign: 'left' }}>
                  Share App
                  </Text>

                <Text style={{ textAlign: 'right', color: 'white' }}>></Text>

              </View>
            </TouchableOpacity>
          </Card>

          <Card containerStyle={styles.card}>
            <TouchableOpacity onPress={() => Linking.openURL('https://play.google.com/store/apps/details?id=com.cloudvalley.trc&hl=en')}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                <Text style={{ color: 'white', textAlign: 'left' }}>
                  Rate us
                  </Text>

                <Text style={{ textAlign: 'right', color: 'white' }}>></Text>

              </View>
            </TouchableOpacity>
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
    borderWidth: 0
  }
});