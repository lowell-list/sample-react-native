import React from "react";
import {Image, ImageBackground, Text, View} from 'react-native';

export default class UserHeader extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      profileImageDimension: -1,
    };
  }

  onImageBackgroundLayout(event) {
    let {x, y, width, height} = event.nativeEvent.layout;
    this.setState({ profileImageDimension: height*0.6 });
  }

  render() {
    return(
      <View style={{flex:1}}>
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
      </View>
    );
  }
}