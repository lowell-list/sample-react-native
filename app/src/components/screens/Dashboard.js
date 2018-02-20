import React from "react";
import {Image, ImageBackground, StatusBar, Text, View} from 'react-native';
import {DIRECT_GRAY, Styles} from "../../constants/Styles";
import AccountDashboardWidget from "../common/AccountDashboardWidget";

export default class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      profileImageHeight: -1,
    };
  }

  render() {
    return(
      <View style={Styles.screen}>
        <ImageBackground
          style={{flex:1, alignItems: 'center', justifyContent: 'center'}}
          source={require('app/assets/images/blue-sky-water-and-green-grass.jpg')}
          onLayout={(event) => {
            let {x, y, width, height} = event.nativeEvent.layout;
            console.log("the height is " + height);
            this.setState({ profileImageHeight: height*0.6 });


          }}
        >
          { this.state.profileImageHeight !== -1
            ? <Image
              source={require('app/assets/images/lowell-mug-2013.jpg')}
              style={{
                width: this.state.profileImageHeight,
                height: this.state.profileImageHeight,
                borderRadius: this.state.profileImageHeight/2,
              }}
            />
            : null
          }
        </ImageBackground>
        <View style={{flex:2, backgroundColor: DIRECT_GRAY, alignItems: 'center', paddingHorizontal: 20}}>
          <Text style={{color: 'white', fontSize: 25, fontFamily: 'open-sans-regular'}}>HELLO {this.props.name.toUpperCase()}</Text>
          <AccountDashboardWidget name='Direct Checking' visibleAccountDigits='4357' dollars='$ 7,289.' cents='42'/>
          <AccountDashboardWidget name='Direct Savings' visibleAccountDigits='2616' dollars='$ 14,347.' cents='23'/>
        </View>
      </View>
    );
  }
}