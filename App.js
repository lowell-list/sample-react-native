import React from 'react';
import {Text} from 'react-native';
import {Font} from 'expo';
import Dashboard from "./app/src/components/screens/Dashboard";

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
        <Dashboard name='Lowell'/>
      ) : (
        <Text>Loading...</Text>
      ))
    );
  }
}

