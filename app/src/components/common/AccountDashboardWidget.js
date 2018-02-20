import React from "react";
import {Text, View} from 'react-native';
import {DIRECT_TAN, DIRECT_GRAY} from '../../constants/Styles';

export default class AccountDashboardWidget extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View style={{width: '100%', marginBottom: 10}}>
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
      </View>
    );
  }
}