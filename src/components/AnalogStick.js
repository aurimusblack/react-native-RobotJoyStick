import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, PanResponder, Animated, Dimensions} from 'react-native';

export default class AnalogStick extends React.Component{
  constructor(){
    super()
    this.position = new Animated.ValueXY();
    const DEVICE_WIDTH = Dimensions.get('window').width;
    const DEVICE_HEIGHT = Dimensions.get('window').height;
    
  }
  PanResponder = PanResponder.create({
    onStartShouldSetPanResponder: (evt, gestureState) => true,
    onPanResponderMove: (evt,gestureState) => {
      this.position.setValue({x: gestureState.dx % 255, y: gestureState.dy % 255})
    },
    onPanResponderRelease: (evt,gestureState) => {
      Animated.spring(this.position,{
        toValue:{x:0,y:0}
      }).start();
    },
  });
  
  render() {
    const sz = 100;
    return (
        <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
        <Animated.View 
        {...this.PanResponder.panHandlers}
        style={[{transform:this.position.getTranslateTransform()},{height: sz, width: sz, borderRadius: 100, backgroundColor: 'black'}]} />
        </View>
    );
  }
}

