import React, { Component } from 'react';
import { View, Text } from 'react-native';

export class BarTitle extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            leftTitle:'',
            rightTitle:'View All'
        }
    }

    render() {
        return(
            <View style={{ height: 40, backgroundColor: '#005bb0',textAlign:'justify', flexDirection: 'row', justifyContent: 'space-between' }} >
                <Text style={{ textAlign: 'left', color: 'white',padding:10 }}>{this.props.leftTitle}</Text>
                <Text style={{ textAlign: 'right', color: 'white',padding:10 }}>{this.state.rightTitle}</Text>
            </View>
        );
    }
}