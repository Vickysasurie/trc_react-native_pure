import React, { Component } from 'react';
import { View, FlatList,Image, TouchableOpacity } from 'react-native';
import images from './images';
export class DisplayList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    render() {
        return(
            <View style={{ height:150 }}>
              <FlatList 
                
                horizontal={true}
                data={this.props.video_thumb}
                renderItem={({item,index}) => {
                
                  return(
                    // <ImageHorizontalView item = {item} index={index} parentFlastList = {this}>
                      
                    // </ImageHorizontalView>
                    <View style={{flex:1, flexDirection: 'column', alignItems:'center', width:150,margin:4}}>
                    <TouchableOpacity style={{ flex: 1, flexDirection: 'row' }} onPress={() => this.props.selectImage()}>
                        <Image source={images[item]} style = {{width:'100%', height: '100%'}} />
                    </TouchableOpacity>
                  </View>
                    );
                }}
                keyExtractor={(item, index) => index.toString()}
              ></FlatList>
          </View>
        );
    }
}

class ImageHorizontalView extends React.Component{

    render() {
      return(
          <View style={{flex:1, flexDirection: 'column', alignItems:'center', width:150,margin:4}}>
            <TouchableOpacity style={{ flex: 1, flexDirection: 'row' }} onPress={() => this.props.navigation.navigate('Events')}>
                <Image source={images[this.props.item]} style = {{width:'100%', height: '100%'}} />
            </TouchableOpacity>
          </View>
      );
    }
  }