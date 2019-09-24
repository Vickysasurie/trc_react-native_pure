import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoadScreen from './loadscreen';
import HomeScreen from './home';
import BottomNav from './bottom-nav';
import Videos from './videos';
import VideoPreview from './video-preview';
import TRC from './trc';
import MORE from './more';
import ACTIVITY from './activity';
import EVENTS from './events';
import QuotePreview  from './quote_preview';
import Signin from './signin';


const RootStack = createStackNavigator(
  {
    Load: {
      screen: LoadScreen,
      navigationOptions: {
        header: null,

      }
    },
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: null,
        headerLeft: null
      },
    },
    Botnav: {
      screen: BottomNav,
      navigationOptions: {
        header: null,

      }
    },
    Videos: {
      screen: Videos,
      navigationOptions: {
        header: null,
        headerLeft: null
      },
    },
    VideoPreview: {
      screen: VideoPreview,
      navigationOptions: {
        header: null,
        headerLeft: null
      },
    },
    TRC: {
      screen: TRC,
      navigationOptions: {
        header: null,
        headerLeft: null
      },
    },
    More: {
      screen: MORE,
      navigationOptions: {
        header: null,
        headerLeft: null
      },
    },
    Activity: {
      screen: ACTIVITY,
      navigationOptions: {
        header: null,
        headerLeft: null
      },
    },
    Events: {
      screen: EVENTS,
      navigationOptions: {
        header: null,
        headerLeft: null
      },
    },
    QuotePreview: {
      screen: QuotePreview,
      navigationOptions: {
        header: null,
        headerLeft: null
      },
    },
    Signin: {
      screen: Signin,
      navigationOptions: {
        header: null,
        headerLeft: null
      },
    }
  },
  {
    initialRouteName: 'Activity',
  }
);
const AppContainer = createAppContainer(RootStack);

export default AppContainer;