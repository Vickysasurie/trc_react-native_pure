import React, { Component } from 'react';
import {  createAppContainer, createStackNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import LoadScreen from './loadscreen';
import HomeScreen from './home';
import BottomNav from './bottom-nav';
import Videos from './videos';
import VideoPreview from './video-preview';
import TRC from './trc';
import MORE from './more';
import ACTIVITY from './activity';
import EVENTS from './events';
import QuotePreview  from './quote_preview';
import Signin from './signin';
import GallerySwipe from './galleryswiper';
import Icon from 'react-native-vector-icons/MaterialIcons';

const VideoScreenStack = createStackNavigator({
  Videos: {
    screen: Videos,
    navigationOptions: {
      header: null,

    }
  },
  VideoPreview: {
    screen: VideoPreview,
    navigationOptions: {
      header: null,

    }
  },

}, {
  initialRoute: 'Videos',
})

const QuoteScreenStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,

    }
  },
  QuotePreview: {
    screen: QuotePreview,
    navigationOptions: {
      header: null,

    }
  },
  GallerySwiper: {
    screen: GallerySwipe,
    navigationOptions: {
      //header: null,
      //headerLeft: null,
      title:'Gallery',
      headerStyle: {
        backgroundColor: '#a9b09e',
      },
    }
  },
}, {
  initialRoute: 'Home',
})

const RootStack = createBottomTabNavigator(
  {
    Home: {
      screen: QuoteScreenStack,
      navigationOptions: {
        header: null,
        headerLeft: null,
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home" size={25} color={tintColor} />
        )
      },
    },
    TRC: {
      screen: TRC,
      navigationOptions: {
        header: null,
        headerLeft: null,
        tabBarIcon: ({ tintColor }) => (
          <Icon name="star" size={25} color={tintColor} />
        )
      },
    },
    Events: {
      screen: EVENTS,
      navigationOptions: {
        header: null,
        headerLeft: null,
        tabBarIcon: ({ tintColor }) => (
          <Icon name="event-available" size={25} color={tintColor} />
        )
      },
    },
    Videos: {
      screen: VideoScreenStack,
      navigationOptions: {
        header: null,
        headerLeft: null,
        tabBarIcon: ({ tintColor }) => (
          <Icon name="video-library" size={25} color={tintColor} />
        )
      },
    },
    Activity: {
      screen: ACTIVITY,
      navigationOptions: {
        header: null,
        headerLeft: null,
        tabBarIcon: ({ tintColor }) => (
          <Icon name="local-activity" size={25} color={tintColor} />
        )
      },
    },
    More: {
      screen: MORE,
      navigationOptions: {
        header: null,
        headerLeft: null,
        
        tabBarIcon: ({ tintColor }) => (
          <Icon name="more" size={25} color={tintColor} />
        )
      },

    },
    Signin: {
      screen: Signin,
      navigationOptions: {
        header: null,
        headerLeft: null,
        tabBarVisible: false
      },
    },

  },
  {
    initialRouteName: 'Home',
    order:['Home', 'TRC', 'Events', 'Videos', 'Activity', 'More'],
    tabBarOptions: {
      
      activeTintColor: '#1570d1',
      style: {
          backgroundColor: '#ffffff',
          height:60,
      
        }
    },
    
  }
);



const AppContainer = createAppContainer(RootStack);

export default AppContainer;