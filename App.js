import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return <View style={styles.splash_screen}>
      <View style={styles.top_container}>
        <Image source={require('./img/directors-logo.jpg')}></Image>
        <Text>Open up App.js to start working on your app!</Text>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}/>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
      <View style={styles.bottom_container}>
        <Text>HELLO LOWELL :)</Text>
      </View>
    </View>;
  }
}

const styles = StyleSheet.create({
  splash_screen: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'powderblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
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
    backgroundColor: '#ff77AA',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
