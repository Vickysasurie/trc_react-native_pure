import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, ImageBackground } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator  } from 'react-navigation-tabs';
import { Col, Row, Grid } from "react-native-easy-grid";

class LatestScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      videos: [{ latest: [] }, { testimonials: [] }, { mudras: [] }, { chakras: [] }],
      latest: [{ videos: '', title: '', desc: '', thumbanil: '' }],
    }
  }
    componentDidMount() {
      var thumb6 = require('../assets/thumbnail6.jpg');
      for (var i = 0; i < this.state.latest.length; i++) {
        this.state.latest[i].videos = 'https://www.youtube.com/embed/KcC8KZ_Ga2M',
          this.state.latest[i].title = 'LATEST',
          this.state.latest[i].desc = 'STUDENT SEMINAR CLASS - 2019'
        this.state.latest[i].thumbanil = thumb6;
      }
      this.forceUpdate();
    }
  
    selectVideo(key) {
      this.props.navigation.navigate('VideoPreview', {
        index: key
      });
    }

  render() {
    return (
      this.state.latest.length > 0 ? (
        <View style={{ backgroundColor: 'white', flex: 1 }} >
          <ImageBackground source={require('../assets/milkyway.jpg')} style={{ width: '100%', height: '100%' }}>
            {this.state.latest.map((latest, key) =>
              <View key={key} style={styles.container} >
                <Grid>
                  <Col >
                    <Image style={{ width: 150, height: 100 }} source={require('../assets/thumb_trc_1.jpg')} />

                  </Col>
                  <Col>
                    <Row style={{ height: 20 }}>
                      <Text style={styles.fontdesign}>{latest.title}</Text>
                    </Row>
                    <Row>
                      <Text style={styles.fontdesign} onPress={() => this.selectVideo(key)}>{latest.desc}</Text>
                    </Row>
                  </Col>
                </Grid>

              </View>
            )}
          </ImageBackground>
        </View>
      ) : (
          <View><Text style={styles.fontdesign}>No Latest Videos</Text></View>
        )
    );
  }
}

class TestimonialScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      videos: [{ latest: [] }, { testimonials: [] }, { mudras: [] }, { chakras: [] }],
      testimonials: [{ videos: '', title: '', desc: '', thumbanil: '' }],
    }
  }

    componentDidMount() {
      var thumb3 = require('../assets/thumbnail3.jpg');
      var thumb4 = require('../assets/thumbnail4.jpg');
      var thumb5 = require('../assets/thumbnail5.jpg');
      var thumb6 = require('../assets/thumbnail6.jpg');

      for (var i = 0; i < this.state.testimonials.length; i++) {
        this.state.testimonials[i].videos = 'https://www.youtube.com/embed/6ZnfsJ6mM5c',
          this.state.testimonials[i].title = 'TESTIMONIALS',
          this.state.testimonials[i].desc = 'In this video we will look at what React Native is, we will setup the CLI, initialize an application and look at some key aspects of the React Native framework. We`ll be using Windows / Android but you can follow on Mac and iOS as well.'
        this.state.testimonials[i].thumbanil = thumb5;
      }

      this.forceUpdate();
  
    }
  
    selectVideo(key) {
    
      this.props.navigation.navigate('VideoPreview', {
        index: key
      });
    }
  render() {
    return (
      this.state.testimonials.length > 0 ? (
        <View style={{ backgroundColor: 'white', flex: 1 }} >
          <ImageBackground source={require('../assets/milkyway.jpg')} style={{ width: '100%', height: '100%' }}>
            {this.state.testimonials.map((testimonials, key) =>
              <View key={key} style={styles.container}>
                <Grid>
                  <Col >
                    <Image style={{ width: 150, height: 100 }} source={require('../assets/thumbnail5.jpg')} />

                  </Col>
                  <Col>
                    <Row style={{ height: 20 }}>
                      <Text style={styles.fontdesign} onPress={() => this.selectVideo(key)}>{testimonials.title}</Text>
                    </Row>
                    <Row>
                      <Text style={styles.fontdesign}>{testimonials.desc}</Text>
                    </Row>
                  </Col>
                </Grid>
              </View>
            )}
          </ImageBackground>
        </View>
      ) : (
          <View><Text style={styles.fontdesign}>No Testimonial Videos</Text></View>
        )
    );
  }
}

class MudrasScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      videos: [{ latest: [] }, { testimonials: [] }, { mudras: [] }, { chakras: [] }],
      mudras: [{ videos: '', title: '', desc: '', thumbanil: '' }],
    }
  }

    componentDidMount() {
      var thumb3 = require('../assets/thumbnail3.jpg');
      var thumb4 = require('../assets/thumbnail4.jpg');
      var thumb5 = require('../assets/thumbnail5.jpg');
      var thumb6 = require('../assets/thumbnail6.jpg');
      for (var i = 0; i < this.state.mudras.length; i++) {
        this.state.mudras[i].videos = 'https://www.youtube.com/embed/gWs3UQzrhtE',
          this.state.mudras[i].title = 'MUDRAS',
          this.state.mudras[i].desc = 'Flutter is an open-source mobile application development SDK created by Google We`ve been dabbling in Flutter for a little bit and have come together to discuss our first impressions and -- more importantly -- where we see Flutter going in the future. Will Flutter kill React Native? What are the benefits that Flutter provides over other popular frameworks?'
          this.state.mudras[i].thumbanil = thumb4;
      }

      this.forceUpdate();
  
    }
  
    selectVideo(key) {
      this.props.navigation.navigate('VideoPreview', {
        index: key
      });
    }
  render() {
    return (
      this.state.mudras.length > 0 ? (
        <View style={{ backgroundColor: 'white', flex: 1}} >
          <ImageBackground source={require('../assets/milkyway.jpg')} style={{ width: '100%', height: '100%' }}>
            {this.state.mudras.map((mudras, key) =>
              <View key={key} style={styles.container}>
                <Grid>
                  <Col >
                    <Image style={{ width: 150, height: 100 }} source={require('../assets/thumbnail4.jpg')} />

                  </Col>
                  <Col>
                    <Row style={{ height: 20 }}>
                      <Text style={styles.fontdesign} onPress={() => this.selectVideo(key)}>{mudras.title}</Text>
                    </Row>
                    <Row>
                      <Text style={styles.fontdesign}>{mudras.desc}</Text>
                    </Row>
                  </Col>
                </Grid>
              </View>
            )}
          </ImageBackground>
        </View>
      ) : (
          <View><Text style={styles.fontdesign}>No Mudras Videos</Text></View>
        )
    );
  }
}

class ChakrasScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      videos: [{ latest: [] }, { testimonials: [] }, { mudras: [] }, { chakras: [] }],
      chakras: [{ videos: '', title: '', desc: '', thumbanil: '' }]
    }
  }

    componentDidMount() {
      var thumb3 = require('../assets/thumbnail3.jpg');
      var thumb4 = require('../assets/thumbnail4.jpg');
      var thumb5 = require('../assets/thumbnail5.jpg');
      var thumb6 = require('../assets/thumbnail6.jpg');
      for (var i = 0; i < this.state.chakras.length; i++) {
        this.state.chakras[i].videos = 'https://www.youtube.com/embed/eLjzIM_4zlg',
          this.state.chakras[i].title = 'CHAKRAS',
          this.state.chakras[i].desc = 'In this video, we are looking at the YouTube app transitions. Hope that you will enjoy the video! 😀 Let me know what you think.        '
        this.state.chakras[i].thumbanil = thumb3;
      }
      this.forceUpdate();
  
    }
    selectVideo(key) {
      this.props.navigation.navigate('VideoPreview', {
        index: key
      });
    }
  render() {
    return (
      this.state.chakras.length > 0 ? (
        <View style={{ backgroundColor: 'white', flex: 1}} >
          <ImageBackground source={require('../assets/milkyway.jpg')} style={{ width: '100%', height: '100%' }}>
            {this.state.chakras.map((chakras, key) =>
              <View key={key} style={styles.container}>
                <Grid>
                  <Col >
                    <Image style={{ width: 150, height: 100 }} source={require('../assets/thumbnail3.jpg')} />

                  </Col>
                  <Col>
                    <Row style={{ height: 20 }}>
                      <Text style={styles.fontdesign} onPress={() => this.selectVideo(key)}>{chakras.title}</Text>
                    </Row>
                    <Row>
                      <Text style={styles.fontdesign}>{chakras.desc}</Text>
                    </Row>
                  </Col>
                </Grid>

              </View>
            )}
          </ImageBackground>
        </View>
      ) : (
          <View><Text style={styles.fontdesign}>No Chakras Videos</Text></View>
        )
    );
  }
}

const Videos = createMaterialTopTabNavigator({
  Latest: LatestScreen,
  Testimonial: TestimonialScreen,
  Mudras: MudrasScreen,
  Chakras: ChakrasScreen,
}
,{
  'lazy': true,
  tabBarOptions: {
    scrollEnabled: true,
    activeTintColor: '#e91e63',
  },
  // 'tabBarComponent': TabView.TabBarTop,
},
);


export default createAppContainer(Videos);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    marginLeft: 5
  },
  loginWebView: {
    flex: 1,
    marginTop: 30,
    marginBottom: 20,
    width: 150,
    maxHeight: 105
  },
  scene: {
    flex: 1,
  },
  tabview: {
    fontWeight: '500',
    fontSize: 2
  },
  fontdesign: {
    color: 'white'
  }
});