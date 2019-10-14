import React, {Fragment,useEffect} from 'react';
import { View, Text,ImageBackground, TouchableOpacity, Alert } from 'react-native'
import {
  LoginManager,
  AccessToken,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk';
import AsyncStorage from '@react-native-community/async-storage';
import firebase, { Notification, RemoteMessage } from 'react-native-firebase';
import firebaseClient from "./FireBaseClient";

export default class ACTIVITY extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      token: ''
    }
  }
   componentDidMount() {

    this.checkPermission();

  }


  checkPermission = async () => {
    console.log('inside activity');
    const enabled = await firebase.messaging().hasPermission();
    if (enabled) {
        this.getFcmToken();
    } else {
        this.requestPermission();
    }
  }
  getFcmToken = async () => {
    const fcmToken = await firebase.messaging().getToken();
    if (fcmToken) {
      console.log('Your Firebase Token is: ', fcmToken);
      this.setState({token:fcmToken});
      this.messageListener();
      //this.showAlert('Your Firebase Token is:', fcmToken);
    } else {
      this.showAlert('Failed', 'No token received');
    }
  }
  requestPermission = async () => {
    try {
      await firebase.messaging().requestPermission();
      // User has authorised
    } catch (error) {
        // User has rejected permissions
    }
  }
  messageListener = async () => {
    this.notificationOpenedListener = firebase.notifications().onNotificationOpened((notificationOpen) => {
      console.log("notification open", notificationOpen)
      const { title, body } = notificationOpen.notification;
      this.showAlert(title, body);
  });
    // inside the app it will show notification
    this.notificationListener = firebase.notifications().onNotification((notification) => {
        const { title, body } = notification;
        this.showAlert(title, body);
        console.log("nofitification listener", notification);
    });
  
    const notificationOpen = await firebase.notifications().getInitialNotification();
    if (notificationOpen) {
      console.log("nofitification opened", notificationOpen);
        const { title, body } = notificationOpen.notification;
          this.showAlert(title, body);
    }
  
    // this.messageListener = firebase.messaging().onMessage((message) => {
    //   console.log(JSON.stringify(message));
    //   this.showAlert(title, body);
    // });
  }
  componentWillUnmount() {
    this.notificationOpenedListener();
}
  showAlert = (title, message) => {
    Alert.alert(
      title,
      message,
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );
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
    Alert.alert("Logout success");
    AsyncStorage.removeItem('user');
  }

  sendRemoteNotification(token) {
    let body;
      body = {
        to: token,
        notification: {
          title: "Simple FCM Client",
          body: "Click me to go to detail",
          sound: "default"
        },
        data: {
          targetScreen: 'Home'
        },
        priority: 10
      };

    firebaseClient.send(JSON.stringify(body), "notification");
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
         <TouchableOpacity
            onPress={() => this.sendRemoteNotification(this.state.token)}
            
          >
            <Text style={{color:'white',fontSize:15,textAlign:'center',textAlignVertical:'center'}}>Send Remote Data</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}