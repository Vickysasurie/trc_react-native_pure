import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

export default class QuotePreview extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            quote:'The 21st Century leaders should not be just interested in people reaching goals but stimulate them to use the creative potential to reach their destiny',
            
        }
    }

    render() {
        return(
            <View style={{flex:1}} >
                <Image source={require('../assets/milkyway.jpg')} style={{ width: '100%', height: '100%', position: 'absolute' }} />
                <View style={{justifyContent: "center",alignItems: "center", flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ textAlign: 'center', color: 'white',padding:10,textAlignVertical:'center' }}>{this.state.quote}</Text>
                    <Text style={{ textAlign: 'right', color: 'white' }}>-Guru.K.M.Sivaswamy</Text>
                </View>
                
            </View>
        );
    }
}