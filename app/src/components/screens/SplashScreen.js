import React from 'react';
import {Button, Image, StatusBar, Text, View} from 'react-native';
import {DIRECT_TAN, Styles} from '../../constants/Styles';

export default class SplashScreen extends React.Component {

  render() {
    return(
      <View style={Styles.screen}>
        <StatusBar hidden />
        <View style={Styles.top_container}>
          <Image
            source={require('app/assets/images/directors-logo.jpg')}
            style={{flex: 1, width: '100%'}}
            resizeMode='contain'
          />
          <Button title='Start' onPress={() => this.props.navigation.navigate('Dashboard')} />
        </View>
        <View style={Styles.bottom_container}>
          <Text style={{color: DIRECT_TAN, fontSize: 30, fontFamily: 'oswald-semibold'}}>HELLO {this.props.screenProps.name.toUpperCase()} :)</Text>
        </View>
      </View>
    );
  }

}