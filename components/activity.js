import React, {Fragment,useEffect} from 'react';
import { View, Text,ImageBackground, TouchableOpacity, Alert, ToastAndroid } from 'react-native'
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
//     ToastAndroid.show('A pikachu appeared nearby !', ToastAndroid.SHORT);
// ToastAndroid.showWithGravity(
//   'All Your Base Are Belong To Us',
//   ToastAndroid.SHORT,
//   ToastAndroid.CENTER,
// );
// ToastAndroid.showWithGravityAndOffset(
//   'A wild toast appeared!',
//   ToastAndroid.LONG,
//   ToastAndroid.BOTTOM,
//   25,
//   50,
// );
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