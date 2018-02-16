import React from "react";
import {Image, Text, View} from 'react-native';
import {Styles} from 'app/src/constants/Styles';

export default class Splash extends React.Component {

  render() {
    return(
      <View style={{flex: 1}}>
        <View style={Styles.top_container}>
          <Image
            source={require('app/assets/images/directors-logo.jpg')}
            style={{flex: 1, width: '100%'}}
            resizeMode='contain'
          />
        </View>
        <View style={Styles.bottom_container}>
          <Text style={{color: 'white', fontSize: 25, fontFamily: 'open-sans-regular'}}>HELLO LOWELL :)</Text>
        </View>
      </View>
    );
  }
}