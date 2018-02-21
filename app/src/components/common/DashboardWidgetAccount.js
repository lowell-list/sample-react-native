import React from "react";
import {Animated, Text, View} from 'react-native';
import {DIRECT_GRAY, DIRECT_TAN} from '../../constants/Styles';

export default class DashboardWidgetAccount extends React.Component {

  state = {
    fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
  };

  componentDidMount() {
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 500,
        delay: Number(this.props.delay),
      }
    ).start();                        // Starts the animation
  }

  render() {
    let { fadeAnim } = this.state;

    return(
      <Animated.View style={{
        width: '100%',
        marginBottom: this.state.fadeAnim.interpolate({inputRange: [0, 1], outputRange: [-100, 10]}),
        opacity: fadeAnim
      }}>
        <View style={{height: 20, backgroundColor: DIRECT_TAN}}/>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent:'center', backgroundColor: 'white'}}>
          <Text style={{color: DIRECT_GRAY, fontSize: 18, fontFamily: 'open-sans-regular'}}>{this.props.name}</Text>
          <Text style={{color: DIRECT_GRAY, fontSize: 12, fontFamily: 'open-sans-regular', paddingLeft: 10}}>-{this.props.visibleAccountDigits}</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'flex-start', justifyContent:'center', backgroundColor: 'white'}}>
          <Text style={{color: DIRECT_GRAY, fontSize: 35, fontFamily: 'open-sans-regular'}}>{this.props.dollars}</Text>
          <Text style={{color: DIRECT_GRAY, fontSize: 28, fontFamily: 'open-sans-regular'}}>{this.props.cents}</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent:'center', backgroundColor: 'white'}}>
          <Text style={{color: DIRECT_GRAY, fontSize: 8, fontFamily: 'open-sans-regular'}}>Account Balance</Text>
        </View>
      </Animated.View>
    );
  }
}