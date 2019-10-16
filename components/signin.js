import * as React from 'react';
import { View, StyleSheet, Text, Image, Alert, Button, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';
import {
  LoginManager,
  AccessToken,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk';
import  AsyncStorage  from '@react-native-community/async-storage';
import firebase, { Notification, RemoteMessage } from 'react-native-firebase';

export default class Signin extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: null,
      profile_pic: null,
      token: null
    }
    this.facebookLogin = this.facebookLogin.bind(this);
    this.checkPermission = this.checkPermission.bind(this);
    this.messageListener = this.messageListener.bind(this);
  }

  sendUserToken(userdata) {
    fetch('https://truerealizationcenter--vikidude.repl.co', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'FCM token': this.state.token,
        'User data':userdata
        
      }),
    });
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
    // inside the app it will show notification
    this.notificationListener = firebase.notifications().onNotification((notification) => {
        const { title, body } = notification;
        this.showAlert(title, body);
        console.log("nofitification listener", notification);
    });
  
    this.notificationOpenedListener = firebase.notifications().onNotificationOpened((notificationOpen) => {
      console.log("notification open", notificationOpen)
      const { title, body } = notificationOpen.notification;
      this.showAlert(title, body);
  });
  
    // const notificationOpen = await firebase.notifications().getInitialNotification();
    // if (notificationOpen) {
    //   console.log("nofitification opened", notificationOpen);
    //     const { title, body } = notificationOpen.notification;
    //       this.showAlert(title, body);
    // }
  
    // this.messageListener = firebase.messaging().onMessage((message) => {
    //   console.log(JSON.stringify(message));
    //   this.showAlert(title, body);
    // });

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

  async facebookLogin() {

    try {
      //LoginManager.setLoginBehavior('NATIVE_ONLY'); //for fb lite and chrome user
      let result = await LoginManager.logInWithPermissions(['public_profile','email'])

      if(result.isCancelled) {
        Alert.alert('Login was cancelled');
      }
       else {
         console.log("fb data",result);

         AccessToken.getCurrentAccessToken().then(
          (data) => {
            let accessToken = data.accessToken
            //alert(accessToken.toString())

             const responseInfoCallback = (error, result) => {
              if (error) {
                console.log(error)
                alert('Error fetching data: ' + error.toString());
              } else {
                console.log(result);
                this.setState({username:result.name});
                this.setState({profile_pic:result.picture.data.url});
                result.media = 'fb';
                AsyncStorage.setItem('user', JSON.stringify(result));
                this.sendUserToken(JSON.stringify(result));
              }
            }

            const infoRequest = new GraphRequest(
              '/me',
              {
                accessToken: accessToken,
                parameters: {
                  fields: {
                    string: 'email,name,first_name,middle_name,last_name,picture.type(large)'
                  }
                }
              },
              responseInfoCallback
            );

            // Start the graph request.
            new GraphRequestManager().addRequest(infoRequest).start()

          }
        )
  
       }
    } catch(nativeError) {
         try{
      LoginManager.setLoginBehavior('WEB_ONLY'); //for facebook application
      let result = await LoginManager.logInWithReadPermissions(['public_profile', 'email']);
        //Alert.alert('Login failed with error'+error);

        if(result.isCancelled) {
          Alert.alert('Login was cancelled');
        }
         else {
           console.log("fb data catched for fb application",result);
  
           AccessToken.getCurrentAccessToken().then(
            (data) => {
              let accessToken = data.accessToken
              //alert(accessToken.toString())
  
              const responseInfoCallback = (error, result) => {
                if (error) {
                  console.log(error)
                  alert('Error fetching data: ' + error.toString());
                } else {
                  console.log(result);
                  this.setState({username:result.name});
                  this.setState({profile_pic:result.picture.data.url});
                  result.media = 'fb';
                  AsyncStorage.setItem('user', JSON.stringify(result));
                  this.sendUserToken(JSON.stringify(result));
                }
              }
  
              const infoRequest = new GraphRequest(
                '/me',
                {
                  accessToken: accessToken,
                  parameters: {
                    fields: {
                      string: 'email,name,first_name,middle_name,last_name,picture.type(large)'
                    }
                  }
                },
                responseInfoCallback
              );
  
              // Start the graph request.
              new GraphRequestManager().addRequest(infoRequest).start()
  
            }
          )
    
         }

        } catch(webError) {
          Alert.alert("Web error");
          console.log("Web error",webError)
        }
    }
  }
  async componentDidMount() {
    this.checkPermission();
    this.messageListener();
  }
  render() {

    return (

      <View style={styles.conatiners}>
        <Image source={require('../assets/signin_wallpaper.webp')} style={{ width: '100%', height: '100%', position: 'absolute' }} />
        <View style={{ justifyContent: "center", flex: 1 }}>

          {(this.state.profile_pic)!= null ? (
            <View style={{ justifyContent: "center", alignItems: 'center' }}>
              <TouchableOpacity onPress={() => this.props.handler1()}>
                <Text style={{ color: 'black', fontSize: 15, textAlign: 'center' }}> Welcome {this.state.username}!</Text>
              </TouchableOpacity>
              <Image source={{ uri: this.state.profile_pic }} style={{ width: 200, height: 200, borderRadius: 80 }} />
            
            </View>

          ) : (

              <Card containerStyle={styles.card} >
                  <Button
                    title='LOGIN_WITH_FACEBOOK'   
                    onPress={()=>this.facebookLogin()}
                   />
              </Card>
            )}



        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({

  conatiners: {
    textAlign: 'center',
    fontSize: 15,
    height: '100%',
    width: '100%'
  },
  card: {
    backgroundColor: 'transparent',
    backgroundColor: 'rgba(230, 230, 230, 0.4)',
    borderWidth: 0

  }
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 20,
//     color: '#000',
//     textAlign: 'center',
//     padding: 20,
//   },
//   imageStyle: {
//     width: 200,
//     height: 300,
//     resizeMode: 'contain',
//   },
// });
