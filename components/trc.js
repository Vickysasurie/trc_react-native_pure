import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  ImageBackground,
} from 'react-native';


export default class AssetExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: 'THE HINDU',
      data: [],
      content: '',
    };
  }
  componentDidMount() {
    this.GetAPI();
  }
  async GetAPI() {
    await fetch(
      'https://newsapi.org/v2/everything?q=bitcoin&apiKey=ced3f78b4fd246c3b59919e8e7977226',
      {
        method: 'GET',
      }
    )
      .then(response => response.json())
      .then(responseJson => {
        // console.log(responseJson);

        this.setState({
          data: responseJson,
        });
      })
      .catch(error => {
        console.error(error);
      });

    this.setState({ content: this.state.data.articles[0].title });
 }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/milkyway.jpg')}
          style={{ width: '100%', height: '100%' }}>

 <View style={{
      marginBottom: 2,
        width: "90%",
        height: 150,
        margin:15
        }}>
        <Image source={require('../assets/16431.jpg')} style={{ width: '100%',height:"100%", position: 'relative' }} />  
      </View>   
          <ScrollView>
            <Text style={styles.contentstyle}>
              <Text>{this.state.content}</Text>
              <Text>{this.state.content}</Text>
              <Text>{this.state.content}</Text>
              <Text>{this.state.content}</Text>
              <Text>{this.state.content}</Text>
              <Text>{this.state.content}</Text>
              <Text>{this.state.content}</Text>
              <Text>{this.state.content}</Text>
              <Text>{this.state.content}</Text>
              <Text>{this.state.content}</Text>
              <Text>{this.state.content}</Text>
            </Text>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex:1
  },

  contentstyle: {
    padding: 17,
    color: 'white',
  },
});
