import React, { Component } from 'react';
import { View, ScrollView, Image } from 'react-native'
import AppContainer from './routes';
import BottomNav from './bottom-nav';
import NavigationService from './NavigationService';
import Header from './header';

export default class RouteMainPage extends React.Component {


    render() {
        return(
            <View style={{ flex: 1 }}>
            <View style={{ flex: 0.9, minHeight: 100 }}>
              <Header />

              <AppContainer
                ref={navigatorRef => {
                  NavigationService.setTopLevelNavigator(navigatorRef);
                }}
              />

            </View>
            <View style={{ flex: 0.1 }}>
              <ScrollView
                horizontal={true}>
                <BottomNav />
              </ScrollView>
            </View>
          </View>
        )
    }
}