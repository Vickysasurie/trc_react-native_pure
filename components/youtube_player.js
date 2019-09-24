import React, { Component } from 'react';
import { View, Text,ImageBackground, TouchableOpacity, Dimensions,  PixelRatio,
  Platform, StyleSheet, ScrollView, Button} from 'react-native'
import YouTube from 'react-native-youtube';

export default class YoutubePlayer extends React.Component {

    constructor(props) {
        super(props)
        this. state = {
          isReady: false,
          status: null,
          quality: null,
          error: null,
          isPlaying: false,
          isLooping: true,
          duration: 0,
          currentTime: 0,
          fullscreen: false,
          playerWidth: Dimensions.get('window').width,
        };
    
      }
      _youTubeRef = React.createRef();  

      render() {
        return (
    
          <ScrollView style={styles.container}>
         
    
          <YouTube
            ref={this._youTubeRef}
            // You must have an API Key for the player to load in Android
            apiKey="AIzaSyDjkFOWUSjdRYeXkA5i5N10gAa1nqD4jow"
            // Un-comment one of videoId / videoIds / playlist.
            // You can also edit these props while Hot-Loading in development mode to see how
            // it affects the loaded native module
            //videoId="ncw4ISEU5ik"
            videoId={this.props.videoId}
            // videoIds={['uMK0prafzw0', 'qzYgSecGQww', 'XXlZfc1TrD0', 'czcjU1w-c6k']}
            // playlistId="PLF797E961509B4EB5"
            play={this.state.isPlaying}
            loop={this.state.isLooping}
            fullscreen={this.state.fullscreen}
            controls={1}
            style={[
              { height: PixelRatio.roundToNearestPixel(this.state.playerWidth / (16 / 9)) },
              styles.player,
            ]}
            onError={e => {
              this.setState({ error: e.error });
            }}
            onReady={e => {
              this.setState({ isReady: true });
            }}
            onChangeState={e => {
              this.setState({ status: e.state });
            }}
            onChangeQuality={e => {
              this.setState({ quality: e.quality });
            }}
            onChangeFullscreen={e => {
              this.setState({ fullscreen: e.isFullscreen });
            }}
            onProgress={e => {
              this.setState({ currentTime: e.currentTime });
            }}
          />
    
        </ScrollView>
        );
      }
      
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
    },
    player: {
      alignSelf: 'stretch',
      marginVertical: 10,
    },
  });
  