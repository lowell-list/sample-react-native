import React from "react";
import {Image, ImageBackground, Text, View} from 'react-native';
import {DIRECT_GRAY, Styles} from "../../constants/Styles";
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
      <View style={Styles.screen}>
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
        <View style={{flex:2, backgroundColor: DIRECT_GRAY, alignItems: 'center', paddingHorizontal: 10}}>
          <Text style={{color: 'white', fontSize: 25, fontFamily: 'open-sans-regular'}}>HELLO {this.props.name.toUpperCase()}</Text>
          <DashboardWidgetAccount name='Direct Checking' visibleAccountDigits='4357' dollars='$ 7,289.' cents='42'/>
          <DashboardWidgetAccount name='Direct Savings' visibleAccountDigits='2616' dollars='$ 14,347.' cents='23'/>
          <DashboardWidgetAccount name='BofA Checking' visibleAccountDigits='1234' dollars='$ 8,420.' cents='58'/>
          <DashboardWidgetRewards name='Direct Rewards' effectiveSavings='$3,000.00' remainingSavings='$37,000.00'/>
        </View>
      </View>
    );
  }
}