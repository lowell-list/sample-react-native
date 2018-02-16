import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import { Font } from 'expo';

export default class App extends React.Component {

  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      'open-sans-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    return(
      <View style={{flex: 1}}>
        <View style={styles.top_container}>
          <Image source={require('./assets/images/directors-logo.jpg')}></Image>
          <Text>Open up App.js to start working on your app!</Text>
          <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}/>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
        </View>
        <View style={styles.bottom_container}>
          {
            (this.state.fontLoaded ? (
              <Text style={{color: 'white', fontSize: 25, fontFamily: 'open-sans-regular'}}>HELLO LOWELL :)</Text>
            ) : null)
          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  top_container: {
    flex: 5,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom_container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
