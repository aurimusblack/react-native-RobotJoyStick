import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, PanResponder, Animated, Dimensions} from 'react-native';
import AnalogStick from './src/components/AnalogStick.js';
export default class App extends Component{
  
  render() {
    return (
        <View style={{flex:1, alignItems: 'center', justifyContent: 'space-around'}}>
          <AnalogStick/>
        </View>
    );
  }
}

