import React, {Fragment,useEffect} from 'react';
import { View, Text,ImageBackground, TouchableOpacity, Alert, YellowBox } from 'react-native'
import {
  LoginManager,
  AccessToken,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk';
import AsyncStorage from '@react-native-community/async-storage';
import firebase, { Notification, RemoteMessage } from 'react-native-firebase';
import firebaseClient from "./FireBaseClient";
import { GoogleSignin, GoogleSigninButton, statusCodes, } from '@react-native-community/google-signin';


export default class ACTIVITY extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      token: ''
    }
  }
   
  componentDidMount() {
    //initial configuration
    GoogleSignin.configure({
      //It is mandatory to call this method before attempting to call signIn()
      scopes: ['https://www.googleapis.com/auth/drive.readonly'],
      // Repleace with your webClientId generated from Firebase console
      webClientId: '761945670038-k4ae1tlp3h5kt3hc96n51sjo7nl75ule.apps.googleusercontent.com',
    });
    //Check if user is already signed in
    this._isSignedIn();
  }
  _isSignedIn = async () => {
    const isSignedIn = await GoogleSignin.isSignedIn();
    if (isSignedIn) {
      alert('User is already signed in');
      //Get the User details as user is already signed in
      this._getCurrentUserInfo();
    } else {
      //alert("Please Login");
      console.log('Please Login');
    }
    this.setState({ gettingLoginStatus: false });
  };
 
  _getCurrentUserInfo = async () => {
    try {
      const userInfo = await GoogleSignin.signInSilently();
      console.log('User Info --> ', userInfo);
      this.setState({ userInfo: userInfo });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        alert('User has not signed in yet');
        console.log('User has not signed in yet');
      } else {
        alert("Something went wrong. Unable to get user's info");
        console.log("Something went wrong. Unable to get user's info");
      }
    }
  };
 
  _signIn = async () => {
    //Prompts a modal to let the user sign in into your application.
    try {
      await GoogleSignin.hasPlayServices({
        //Check if device has Google Play Services installed.
        //Always resolves to true on iOS.
        showPlayServicesUpdateDialog: true,
      });
      const userInfo = await GoogleSignin.signIn();
      console.log('User Info --> ', userInfo);
      this.setState({ userInfo: userInfo });
    } catch (error) {
      console.log('Message', error.message);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('User Cancelled the Login Flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Signing In');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Play Services Not Available or Outdated');
      } else {
        console.log('Some Other Error Happened');
      }
    }
  };
 
  _signOut = async () => {
    //Remove user session from the device.
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      this.setState({ userInfo: null }); // Remove the user from your app's state as well
    } catch (error) {
      console.error(error);
    }
  };
  
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

          <GoogleSigninButton
    style={{ width: 192, height: 48 }}
    size={GoogleSigninButton.Size.Wide}
    color={GoogleSigninButton.Color.Dark}
    onPress={this._signIn}
    disabled={this.state.isSigninInProgress} />

        </ImageBackground>
      </View>
    );
  }
}