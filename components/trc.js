import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  ImageBackground,
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator  } from 'react-navigation-tabs';

class FirstTab extends React.Component {

  render() {
    return(
        <View>
                  <ImageBackground
               source={require('../assets/milkyway.jpg')}
               style={{ width: '100%', height: '100%' }}>
          <Text>Hai 1st tab</Text>
          </ImageBackground>
        </View>
    );
  }
}

class SecondTab extends React.Component {

  render() {
    return(
        <View>
                <ImageBackground
               source={require('../assets/milkyway.jpg')}
               style={{ width: '100%', height: '100%' }}>
<Text>Hai 2nd tab</Text>
               </ImageBackground>
          
          
        </View>
    );
  }
}

class ThirdTab extends React.Component {

  render() {
    return(
        <View>
            <ImageBackground
               source={require('../assets/milkyway.jpg')}
               style={{ width: '100%', height: '100%' }}>
          <Text>Hai 3rd tab</Text>
          </ImageBackground>
        </View>
    );
  }
}

class FourthTab extends React.Component {

  render() {
    return(
        <View>
          <ImageBackground
               source={require('../assets/milkyway.jpg')}
               style={{ width: '100%', height: '100%' }}>
          <Text>Hai 3rd tab</Text>
          </ImageBackground>
        </View>
    );
  }
}

const TRC = createMaterialTopTabNavigator({
  Latest: FirstTab,
  Testimonial: SecondTab,
  Mudras: ThirdTab,
  Chakras: FourthTab,
}
,{
  'lazy': true,
  tabBarOptions: {
    scrollEnabled: true,
    activeTintColor: 'white',
    style: {
      backgroundColor: 'rgba(178, 179, 184, 0.9)',
//      position: 'absolute',
      color:'#b2b3b8'
    }
  },
},
);

export default createAppContainer(TRC);