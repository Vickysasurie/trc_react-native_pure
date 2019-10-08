import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import GallerySwiper from "react-native-gallery-swiper";
import Orientation from 'react-native-orientation';
import { connect } from 'react-redux';
import { addPlace } from '../actions/place';

class GallerySwipe extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            gallery:false,
            screen: Dimensions.get('window'),
        }
    }

    componentDidMount() {
        Orientation.lockToLandscape();
        console.log("gallery screen ",this.state.screen);
        console.log("gallery value @ swiper ",this.props.gallery);
        this.getOrientation1();
    }
    componentWillUnmount() {
        Orientation.lockToPortrait();
        this.props.add(this.state.gallery);
        this.getOrientation1();
    }
    getOrientation1(){
        //Orientation.addOrientationListener();
        Orientation.getOrientation((err, orientation) => {
          console.log(`Current Device Orientation gallery: ${orientation}`);
        });
        console.log(this.state.screen);

    }
    render() {
        return(
            <View style={{flex:1}} >
                    <GallerySwiper
            images={[

                { source: require("../assets/avatar.jpg"),
                width: 1080,
                height: 1920 },
                { source: require("../assets/chief_logo.png"),
                width: 1080,
                height: 1920 },
                { source: require("../assets/16431.jpg"),
                width: 1080,
                height: 1920 },
                { source: require("../assets/thumbnail1.jpg"),
                width: 1080,
                height: 1920 },
                { source: require("../assets/thumbnail2.jpg"),
                width: 1080,
                height: 1920 },

            ]}
        />
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
      gallery: state.gallery
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      add: (name) => {
        dispatch(addPlace(name))
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(GallerySwipe)