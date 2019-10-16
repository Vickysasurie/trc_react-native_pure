import React, { Component } from 'react';
import { View, Dimensions, StatusBar } from 'react-native';
import GallerySwiper from "react-native-gallery-swiper";
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
        StatusBar.setHidden(true);
    }
    
    componentWillUnmount() {
        this.props.add(this.state.gallery);
        StatusBar.setHidden(false);
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