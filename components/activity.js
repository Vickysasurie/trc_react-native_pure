import React, { Component } from 'react';
import { View, Text,ImageBackground, TouchableOpacity, AsyncStorage } from 'react-native'
import {
  LoginManager,
  AccessToken,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk';

export default class ACTIVITY extends React.Component {

  constructor(props) {
    super(props);
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