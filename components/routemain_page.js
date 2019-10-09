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
      gallery: false,
      screen: Dimensions.get('window'),
    }

  }
  componentDidMount() {
    console.log(this.props.gallery);
  }

  componentDidUpdate() {
    if (this.props.gallery.gallery === true) {
      if (this.state.gallery != true) {
        this.setState({ gallery: true });
      }
    } else {
      this.setState({ gallery: false });
    }
  }


  render() {
    return (
      <View style={{ flex: 1 }} >
        {this.state.gallery === false? (
          <Header />
        ):[]}
          
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