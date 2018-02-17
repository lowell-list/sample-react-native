import React from 'react';
import {Image, Text, View} from 'react-native';
import {DIRECT_TAN, Styles} from '../../constants/Styles';

export default class Splash extends React.Component {

  render() {
    return(
      <View style={Styles.screen}>
        <View style={Styles.top_container}>
          <Image
            source={require('app/assets/images/directors-logo.jpg')}
            style={{flex: 1, width: '100%'}}
            resizeMode='contain'
          />
        </View>
        <View style={Styles.bottom_container}>
          <Text style={{color: DIRECT_TAN, fontSize: 25, fontFamily: 'open-sans-regular'}}>HELLO LOWELL :)</Text>
        </View>
      </View>
    );
  }
}