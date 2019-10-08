import React, { Component } from 'react';
import { View, ScrollView, Dimensions, SafeAreaView } from 'react-native'
import AppContainer from './routes';
import BottomNav from './bottom-nav';
import NavigationService from './NavigationService';
import Header from './header';
import { connect } from 'react-redux';
import { addPlace } from '../actions/place';


class RouteMainPage extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      gallery: this.props.gallery || false,
      screen: Dimensions.get('window'),
    }

  }

  componentWillUpdate() {
    console.log("condition" + (this.state.gallery != true), "props", this.props.gallery);
    //this.setState({gallery:true});
    if (this.props.gallery.gallery === true) {
      console.log("inside", this.props.gallery);
      if (this.state.gallery != true) {
        this.setState({ gallery: true });
      }
    } else {
      console.log("condition @ else" + (this.state.gallery != true));
      this.setState({ gallery: false });

    }

  }


  render() {
    return (
      <View style={{ flex: 1 }} >

        
          <Header />
  
         <AppContainer />

      </View>
    )
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(RouteMainPage)