import React from "react";
import {StatusBar, Alert, Image, ImageBackground, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {DIRECT_GRAY, DIRECT_TAN, Styles} from "../../constants/Styles";
import DashboardWidgetAccount from "../common/DashboardWidgetAccount";
import DashboardWidgetRewards from "../common/DashboardWidgetRewards";

export default class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      profileImageDimension: -1,
    };
  }

  onImageBackgroundLayout(event) {
    let {x, y, width, height} = event.nativeEvent.layout;
    console.log("the height is " + height);
    this.setState({ profileImageDimension: height*0.6 });
  }

  render() {
    return(
      <View style={[Styles.screen, {backgroundColor: DIRECT_GRAY}]}>
        <StatusBar hidden />
        <ImageBackground
          style={{flex:1, alignItems: 'center', justifyContent: 'center'}}
          source={require('app/assets/images/blue-sky-water-and-green-grass.jpg')}
          onLayout={this.onImageBackgroundLayout.bind(this)}
        >
          { this.state.profileImageDimension !== -1
            ? <Image
              source={require('app/assets/images/lowell-mug-2013.jpg')}
              style={{
                width: this.state.profileImageDimension,
                height: this.state.profileImageDimension,
                borderRadius: this.state.profileImageDimension/2,
              }}
            />
            : null
          }
        </ImageBackground>
        <Text style={{alignSelf: 'center', color: 'white', fontSize: 25, fontFamily: 'open-sans-regular'}}>HELLO {this.props.name.toUpperCase()}</Text>
        <View style={{flex:2}}>
          <ScrollView
            style={{paddingHorizontal: 10, marginBottom: 50}}
            contentContainerStyle={{alignItems:'center'}}
          >
            <DashboardWidgetAccount name='Direct Checking' visibleAccountDigits='4357' dollars='$ 7,289.' cents='42'/>
            <DashboardWidgetAccount name='Direct Savings' visibleAccountDigits='2616' dollars='$ 14,347.' cents='23'/>
            <DashboardWidgetRewards name='Direct Rewards' effectiveSavings='$3,000.00' remainingSavings='$37,000.00'/>
          </ScrollView>
        </View>
        <View style={{position: 'absolute', alignSelf: 'center', bottom: 5, width: '75%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end'}}>
          <TouchableOpacity onPress={this._onPressHomeButton}>
            <Image source={require('app/assets/images/icon-house.png')} style={{width: 40, height: 40}}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._onPressAddButton}>
            <View style={{width: 50, height: 50, borderRadius:25, backgroundColor: DIRECT_TAN, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{color: 'white', fontSize: 25, fontFamily: 'open-sans-regular'}}>+</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._onPressDirectorsButton}>
            <Image source={require('app/assets/images/icon-directors.png')} style={{width: 40, height: 40}}/>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  _onPressHomeButton() {
    Alert.alert('Home button pressed');
  }

  _onPressAddButton() {
    Alert.alert('Add account button pressed');
  }

  _onPressDirectorsButton() {
    Alert.alert('Directors button pressed');
  }

}