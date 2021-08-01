import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import image from '../asset/image/main.png'

export default class Home extends Component {
  render(){
    return (
      <View style={{ backgroun="#663399" }}>
      <View>
      <View style={{ backgroundColor:'#FF6D3D', position:'absolute',width:'13px', height:'37px', marginTop:'83px', marginLeft:'29px', borderRadius:'50px' }}></View>

      <View style={{ backgroundColor:'#9A66BA', position:'absolute',width:'13px', height:'26px', marginTop:'102px', marginLeft:'35px', borderRadius:'50px' }}></View>

      <View style={{ backgroundColor:'#FF6D3D', position:'absolute',width:'13px', height:'37px', marginTop:'83px', marginLeft:'29px', borderRadius:'50px' }}></View>
      </View>

      <View>
          <Text style={style.header1}>A new way to manage</Text>
          <Text style={style.header2}>your work!</Text>
      </View>

      <View>
        
      </View>

      </View>
    );
  };

};

// Style for StyleSheet

const style = StyleSheet.create({
  header1: {
      
  },
});

