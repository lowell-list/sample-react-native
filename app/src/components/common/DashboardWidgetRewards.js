import React from "react";
import {Text, View} from 'react-native';
import {DIRECT_TAN, DIRECT_GRAY} from '../../constants/Styles';

export default class DashboardWidgetRewards extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View style={{width: '100%', marginBottom: 10}}>
        <View style={{height: 20, backgroundColor: DIRECT_TAN}}/>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent:'center', backgroundColor: 'white'}}>
          <Text style={{color: DIRECT_GRAY, fontSize: 18, fontFamily: 'open-sans-semibold'}}>{this.props.name}</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'flex-start', justifyContent:'center', backgroundColor: 'white', paddingHorizontal:10, paddingBottom: 10}}>
          <View style={{flex: 1, flexDirection: 'column', alignItems:'center', backgroundColor: 'black', marginEnd: 5, padding: 3}}>
            <Text style={{color: 'white', fontSize: 22, fontFamily: 'open-sans-regular'}}>{this.props.effectiveSavings}</Text>
            <Text style={{color: 'white', fontSize: 8, fontFamily: 'open-sans-regular', marginTop: -5}}>effective savings to date</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'column', alignItems:'center', backgroundColor: 'black', marginStart: 5, padding: 3}}>
            <Text style={{color: 'white', fontSize: 22, fontFamily: 'open-sans-regular'}}>{this.props.remainingSavings}</Text>
            <Text style={{color: 'white', fontSize: 8, fontFamily: 'open-sans-regular', marginTop: -5}}>remaining savings over life of loan</Text>
          </View>
        </View>
      </View>
    );
  }
}