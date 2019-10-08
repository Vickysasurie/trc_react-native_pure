import * as React from 'react';
import { View, StyleSheet, Text, Image, Alert, AsyncStorage, TouchableHighlight, Button } from 'react-native';
import { Card } from 'react-native-elements';
import {
  LoginManager,
  AccessToken,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk';


export default class Signin extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: null,
      profile_pic: null
    }
    this.facebookLogin = this.facebookLogin.bind(this);
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
                //console.log("name in state ",this.state.username);
                //alert('Success fetching data: ' , (result.name).toString());
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
                  //console.log("name in state ",this.state.username);
                  //alert('Success fetching data: ' , (result.name).toString());
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

  render() {

    return (

      <View style={styles.conatiners}>
        <Image source={require('../assets/signin_wallpaper.webp')} style={{ width: '100%', height: '100%', position: 'absolute' }} />
        <View style={{ justifyContent: "center", flex: 1 }}>

          {(this.state.profile_pic)!= null ? (
            <View style={{ justifyContent: "center", alignItems: 'center' }}>
              <TouchableHighlight onPress={() => this.props.handler1()}>
                <Text style={{ color: 'black', fontSize: 15, textAlign: 'center' }}> Welcome {this.state.username}!</Text>
              </TouchableHighlight>
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
