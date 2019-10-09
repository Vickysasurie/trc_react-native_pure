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

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      storevalue: false,
      signedIn: false,
    }
    this.handler = this.handler.bind(this);
  }


  async componentDidMount() {
    const data = await AsyncStorage.getItem('user');
    const value = JSON.parse(data);

    if (value !== null) {
      this.setState({
        storevalue: true
      });
      this.setState({
        signedIn: true
      });
      Alert.alert("Welcome back", value.name);
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