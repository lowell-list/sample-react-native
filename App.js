import React from 'react';
import {StackNavigator,} from 'react-navigation';
import {Font} from 'expo';
import DashboardScreen from "./app/src/components/screens/DashboardScreen";
import SplashScreen from "./app/src/components/screens/SplashScreen";

export default class App extends React.Component {

  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      'open-sans-regular': require('./app/assets/fonts/OpenSans-Regular.ttf'),
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      (this.state.fontLoaded ? (
        <RootStack screenProps={{name: 'Lowell'}}/>
      ) : (
        null
      ))
    );
  }
}

const RootStack = StackNavigator(
  {
    Splash: {
      screen: SplashScreen,
    },
    Dashboard: {
      screen: DashboardScreen,
    },
  },
  {
    initialRouteName: 'Splash',
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  }
);

