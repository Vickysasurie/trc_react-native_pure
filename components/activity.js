import React, { Component } from 'react';
import { View, Text,ImageBackground, TouchableOpacity } from 'react-native'
import {
  LoginManager,
  AccessToken,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk';
import AsyncStorage from '@react-native-community/async-storage';
import firebase, { Notification, RemoteMessage } from 'react-native-firebase';

export default class ACTIVITY extends React.Component {

  constructor(props) {
    super(props);
  }
  async componentDidMount() {
    // console.log("hai from activity");
    // if (Platform.OS === 'android') {
    //   try {
    //     const res = await firebase.messaging().requestPermission();
    //     const fcmToken = await firebase.messaging().getToken();
    //     console.log("hai from activity",fcmToken);
    //     if (fcmToken) {
    //       console.log("hai from activity",fcmToken);
    //       logger.log('FCM Token: ', fcmToken);
    //       const enabled = await firebase.messaging().hasPermission();
    //       if (enabled) {
    //         logger.log('FCM messaging has permission:' + enabled)
    //       } else {
    //         try {
    //           await firebase.messaging().requestPermission();
    //           logger.log('FCM permission granted')
    //         } catch (error) {
    //           logger.log('FCM Permission Error', error);
    //         }
    //       }
    //       firebase.notifications().onNotificationDisplayed((notification: Notification) => {
    //         // Process your notification as required
    //         // ANDROID: Remote notifications do not contain the channel ID. You will have to specify this manually if you'd like to re-display the notification.
    //         logger.log('Notification: ', notification)
    //       });
    //       this.notificationListener = firebase.notifications().onNotification((notification: Notification) => {
    //         logger.log('Notification: ', notification)
    //       });
    //     } else {
    //       logger.log('FCM Token not available');
    //     }
    //   } catch (e) {
    //     logger.log('Error initializing FCM', e);
    //   }
    // }
    this.checkPermission();
  }

  checkPermission = async () => {
    const enabled = await firebase.messaging().hasPermission();
    if (enabled) {
        this.getFcmToken();
    } else {
        this.requestPermission();
    }
  }
 
  logout() {
    AccessToken.getCurrentAccessToken().then(
      (data) => {
        let accessToken = data.accessToken
    FBLogout = (accessToken) => {
      let logout =
          new GraphRequest(
              "me/permissions/",
              {
                  accessToken: accessToken,
                  httpMethod: 'DELETE'
              },
              (error, result) => {
                  if (error) {
                      console.log('Error fetching data: ' + error.toString());
                  } else {
                      LoginManager.logOut();
                  }
              });
      new GraphRequestManager().addRequest(logout).start();
  };
})
    console.log("logout success");
    AsyncStorage.removeItem('user');
  }

  render() {
    return (
      <View style={{ flex: 1}}>
         <ImageBackground source={require('../assets/milkyway.jpg')} style={{ width: '100%', height: '100%' }}>
         <View style={{ flex: 1,justifyContent: "center",alignItems: "center" }}>
            <Text style={{color:'white',fontSize:15,textAlign:'center',textAlignVertical:'center'}}>Under Develeopment :) Keep Support!</Text>
         </View>
         <TouchableOpacity onPress = {()=>this.logout()}>
            <Text style={{color:'white',fontSize:15,textAlign:'center',textAlignVertical:'center'}}>Logout</Text>
         </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}