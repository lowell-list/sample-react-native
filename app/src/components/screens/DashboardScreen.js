import React from "react";
import {Alert, Image, ScrollView, StatusBar, Text, TouchableOpacity, View} from 'react-native';
import {DIRECT_GRAY, DIRECT_TAN, Styles} from "../../constants/Styles";
import DashboardWidgetAccount from "../common/DashboardWidgetAccount";
import DashboardWidgetRewards from "../common/DashboardWidgetRewards";
import UserHeader from "../common/UserHeader";

export default class DashboardScreen extends React.Component {

  render() {
    return(
      <View style={[Styles.screen, {backgroundColor: DIRECT_GRAY}]}>
        <StatusBar hidden />
        <UserHeader name={this.props.screenProps.name}/>
        <TouchableOpacity style={{position: 'absolute', top: 0, left: 0}} onPress={this._onPressGearButton}>
          <Image source={require('app/assets/images/icon-gear.png')} style={{
            margin: 5, width: 40, height: 40
          }}/>
        </TouchableOpacity>
        <View style={{flex:2}}>
          <ScrollView
            style={{paddingHorizontal: 10, marginBottom: 50}}
            contentContainerStyle={{alignItems:'center'}}
          >
            <DashboardWidgetAccount name='Direct Checking' visibleAccountDigits='4357' dollars='$ 7,289.' cents='42' delay='500'/>
            <DashboardWidgetAccount name='Direct Savings' visibleAccountDigits='2616' dollars='$ 14,347.' cents='23' delay='750'/>
            <DashboardWidgetRewards name='Direct Rewards' effectiveSavings='$3,000.00' remainingSavings='$37,000.00'/>
          </ScrollView>
        </View>
        <View style={{position: 'absolute', alignSelf: 'center', bottom: 5, width: '75%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end'}}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
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

  _onPressGearButton() {
    Alert.alert('Gear button pressed');
  }

  _onPressAddButton() {
    Alert.alert('Add account button pressed');
  }

  _onPressDirectorsButton() {
    Alert.alert('Directors button pressed');
  }

}