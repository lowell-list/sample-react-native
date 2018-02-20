import React from 'react';
import {Button, Image, StatusBar, Text, View} from 'react-native';
import {DIRECT_TAN, Styles} from '../../constants/Styles';

const _name = 'Lowell';

export default class SplashScreen extends React.Component {

  static navigationOptions = {
    title: 'Splash',
  };

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
          <Button title='Start' onPress={() => this.props.navigation.navigate('Dashboard',{name: _name})} />
        </View>
        <View style={Styles.bottom_container}>
          <Text style={{color: DIRECT_TAN, fontSize: 25, fontFamily: 'open-sans-regular'}}>HELLO {_name.toUpperCase()} :)</Text>
        </View>
      </View>
    );
  }

}