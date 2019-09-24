import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
//import AnimatedLoader from 'react-native-animated-loader';

export default class LoadScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };

    setTimeout(
      () => {
        this.setState({ visible: !this.state.visible });
      },

      2000
    );
  }
goHome() {
 this.props.navigation.navigate('Home');
 // alert("hi");
}
  render() {
    const { visible } = this.state;

    return (
      <View style={styles.container}>
      
        {!visible ? (
          <ImageBackground
            source={require('../assets/bg1.jpg')}
            style={{ width: '100%', height: '100%' }}>
            <View
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
          <TouchableOpacity onPress={()=> this.goHome()}>
              <Text style={styles.textstyle}>
                 Hello, Welcome To My App!...
              </Text>
             </TouchableOpacity>
            </View>
          </ImageBackground>
        ) : (
          []
        )}

        {/* <AnimatedLoader
          visible={visible}
          overlayColor="rgba(255,255,255,0.5)"
          animationStyle={styles.lottie}
          speed={1}
          source={require('../assets/8522-demo.json')}
        /> */}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lottie: {
    width: 150,
    height: 150,
    backgroundColor: '#CDC8B1',
  },
  textstyle: {
    color: '#FFCD5B',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
  },
});
