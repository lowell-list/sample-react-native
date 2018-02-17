import React from "react";
import {Image, ImageBackground, Text, View} from 'react-native';
import {Styles} from "../../constants/Styles";

export default class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      imageBackgroundHeight: -1,
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
            this.setState({ imageBackgroundHeight: height });
          }}
        >
          { this.state.imageBackgroundHeight !== -1
            ? <Image
              source={require('app/assets/images/lowell-mug-2013.jpg')}
              style={{
                borderWidth:1,
                borderColor:'rgba(0,0,0,0.2)',
                width: this.state.imageBackgroundHeight/2,
                height: this.state.imageBackgroundHeight/2,
                borderRadius: this.state.imageBackgroundHeight/4,
              }}
            />
            : null
          }
        </ImageBackground>
        <View style={{flex:2, backgroundColor: 'black'}}>
          <Text style={{color: 'white', fontSize: 25, fontFamily: 'open-sans-regular'}}>Hello Lowell</Text>
        </View>
      </View>
    );
  }
}