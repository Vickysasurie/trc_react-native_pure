import React, { Fragment } from 'react';
import {
  StyleSheet,
  View,
  Alert,
} from 'react-native';
import  AsyncStorage  from '@react-native-community/async-storage';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Signin from './components/signin';
import RouteMainPage from './components/routemain_page';
import LoadScreen from './components/loadscreen';
import firebase, { Notification, RemoteMessage } from 'react-native-firebase';
import firebaseClient from "./components/FireBaseClient";


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      storevalue: false,
      signedIn: false,
    }
    this.handler = this.handler.bind(this);
    this.checkPermission = this.checkPermission.bind(this);
    this.messageListener = this.messageListener.bind(this);
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
//   componentWillUnmount() {
//     this.notificationOpenedListener();
// }
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
 

  async componentDidMount() {
    this.checkPermission();
    this.messageListener();
    const data = await AsyncStorage.getItem('user');
    const value = JSON.parse(data);

    if (value !== null) {
      this.setState({
        storevalue: true
      });
      this.setState({
        signedIn: true
      });
      //Alert.alert("Welcome back", value.name);
      //console.log("Already signin: ", value);
    } else {
      this.setState({
        storevalue: true
      });
    }
  }
  handler() {

    this.setState({
      signedIn: true
    });
  }

  render() {
    return (


      <View style={{ flex: 1 }}>
        {this.state.storevalue? (
            <View style={{ flex: 1 }}>
                {this.state.signedIn ? (
                  <RouteMainPage />
                  ) : (
                    <Signin handler1={this.handler} />      
                  )
                }          
                </View>
        ):(
            <LoadScreen />
        )}
      </View>

    );
  }
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});