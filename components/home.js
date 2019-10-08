import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, Dimensions, Image, Linking, Alert, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';
import { BarTitle } from './bar-title';
import { DisplayList } from './flatList';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';
import { addPlace } from '../actions/place';

const { height } = Dimensions.get('window');
class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      dataSource: [
        'https://www.youtube.com/embed/6ZnfsJ6mM5c',
        'https://www.youtube.com/embed/rb8smP_xTTY'
      ],
      video_thumb: ['thumb1', 'thumb2', 'thumb3', 'thumb4', 'thumb5', 'thumb6', 'thumb7', 'thumb8', 'thumb9'],
      screenHeight:0,
      gallery:false
    };

  }

  onContentChange(contentWidth,contentHeight) {
    this.setState({screenHeight:contentHeight});
  }

  selectimage() {
    this.props.add(true);
    this.setState({gallery:this.props.gallery});
    this.props.navigation.navigate('GallerySwiper');
    
  }

  render() {

    return (

      <View style={{height:'100%', width:'100%'}}>

        <Image source={require('../assets/milkyway.jpg')} style={{ width: '100%', height: '100%', position: 'absolute' }} />

<ScrollView >

<View style={{
      marginBottom: 2,
        width: "90%",
        height: 150,
        margin:15
        }}>
        <Image source={require('../assets/16431.jpg')} style={{ width: '100%',height:"100%", position: 'relative' }} />  
      </View>          

<View style={[{ width: '90%',padding:5, margin: 15,borderWidth:0}]}>
  <TouchableOpacity onPress={() => Alert.alert('Photo click')}>
      <Text style={{color:'white', fontSize:12,textAlign:'center'}}>CLICK HERE FOR ANNIVERSARY PHOTO GALLERY</Text>
  </TouchableOpacity>
  {/* <Button title= "CLICK HERE FOR ANNIVERSARY PHOTO GALLERY" onPress={() => Alert.alert('Photo click')} /> */}

</View>



          <Card
            containerStyle={styles.card}
          >
            <TouchableOpacity onPress = {()=>this.props.navigation.navigate('QuotePreview')}>
               <Text style={{ color: 'white' }}>
                    "The 21st Century leaders should not be just interested in people reaching goals but stimulate them to use the creative potential to reach their destiny"</Text>
                <Text style={{ textAlign: 'right', color: 'white' }}>-Guru.K.M.Sivaswamy</Text>
            </TouchableOpacity>
          </Card>

          <Card containerStyle={{ backgroundColor: 'transparent', minHeight: 120, backgroundColor: 'rgba(230, 230, 230, 0.4)',borderWidth:0 }}>


            <TouchableOpacity style={{ flex: 1, flexDirection: 'row' }} onPress={() => this.props.navigation.navigate('Events')}>
              <Image source={require('../assets/seminar.png')} style={{ width: '40%', height: '100%' }} />
              <Text style={{ color: 'white', width: '60%', height: '100%', textAlign: 'right' }}>7-Day Experimental Program 23/Sep/2019 to 29/Sep/2019 Amsam Mahali Nenmeli Chengalpattu-603002 </Text>
            </TouchableOpacity>


          </Card>
          <Text>{'\n'}</Text>
          <BarTitle leftTitle={'Latest Videos'}></BarTitle>

          <DisplayList video_thumb={this.state.video_thumb} selectImage = {()=>this.selectimage()}></DisplayList>

          <BarTitle leftTitle={'Image Gallery'}></BarTitle>
          
              <DisplayList video_thumb={this.state.video_thumb} selectImage = {()=>this.selectimage()} ></DisplayList>
          
          <BarTitle leftTitle={'Testimonial Videos'}></BarTitle>
          <DisplayList video_thumb={this.state.video_thumb} selectImage = {()=>this.selectimage()}></DisplayList>

          {/* <Gallery
        style={{flex: 1, backgroundColor: 'black'}}
        images={[
          'http://p10.qhimg.com/t019e9cf51692f735be.jpg',
          'http://ww2.sinaimg.cn/mw690/714a59a7tw1dxqkkg0cwlj.jpg',
          'http://www.bz55.com/uploads/allimg/150122/139-150122145421.jpg'
        ]}
      /> */}

          <Card containerStyle={styles.card} >

          <Text style={{textAlign: 'center',color:'white',fontWeight:'bold'}}>True Realization Centre</Text>
          <Text style={{textAlign: 'center',color:'white'}}> No 80A Als Nagar, Madambakkam, Chennai Tamil Nadu, 600073 {'\n'} +91 9841077467 support@truerealizationcenter.org  </Text>

            <View style = {{flex:1, flexDirection:'row',justifyContent:'center'}}>
                <TouchableOpacity onPress = {()=> Linking.openURL('http://www.truerealizationcentre.org/')}>
                    <Icon size={30} color="white" name= "earth" />
                </TouchableOpacity>
                <TouchableOpacity onPress = {()=> Linking.openURL('https://wa.me/919841077467')}>
                    <Icon size={30} color="white" name= "whatsapp" />
                </TouchableOpacity>
                <TouchableOpacity onPress = {()=> Linking.openURL('https://m.facebook.com/True-Realization-Centre-INDIA-741183079408942')}>
                    <Icon size={30} color="white" name= "facebook-box" />
                </TouchableOpacity>
                <TouchableOpacity onPress = {()=> Linking.openURL('https://www.youtube.com/channel/UClYMSQ8dL2gqjHpShV7aTKQ')}>
                    <Icon size={30} color="white" name= "youtube" />
                </TouchableOpacity>
            </View>
            
          </Card>

        </ScrollView>
        </View>     



    );
  }
}

const styles = StyleSheet.create({

  card: {
    backgroundColor: 'transparent',
    backgroundColor: 'rgba(230, 230, 230, 0.4)',
    borderWidth:0
  }
});

const mapStateToProps = state => {
  return {
    gallery: state.gallery
  }
}

const mapDispatchToProps = dispatch => {
  return {
    add: (name) => {
      dispatch(addPlace(name))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)