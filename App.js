import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  titlepage: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 45,
  },
  red: {
    color: 'red',
  },
  backgroundImage:{
    position: 'absolute',
},
ImageIconStyle: {
  padding: 10,
  margin: 5,
  height: 200,
  width: 150,
  resizeMode: 'stretch',
  flexDirection: 'row'
},
});

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image source={require('./glitter.jpg')} style= { styles.backgroundImage }/>
        <Image source={require('./text2.png')}  style= { {position: 'absolute'}}/>
        <View style={{ flexDirection: 'row', top:350}}> 
        <TouchableOpacity activeOpacity={0.5}>
        <Image
            source={require('./pretty.png')}
            style={styles.ImageIconStyle}
          />
          <Text style={{color:'white', position:"absolute"}}> AR WORLD </Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5}>
        <Image
            source={require('./pretty.png')}
            style={styles.ImageIconStyle}
          />
          <Text style={{color:'white'}}> AR WORLD </Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5}>
        <Image
            source={require('./pretty.png')}
            style={styles.ImageIconStyle}
          />
          <Text style={{color:'white'}}> AR WORLD </Text>
        </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', bottom:400}}>
        <TouchableOpacity activeOpacity={0.5}>
        <Image
            source={require('./pretty.png')}
            style={styles.ImageIconStyle}
          />
          <Text style={{color:'white'}}> AR WORLD </Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5}>
        <Image
            source={require('./pretty.png')}
            style={styles.ImageIconStyle}
          />
          <Text style={{color:'white'}}> AR WORLD </Text>
        </TouchableOpacity>
        </View>
        
      </View>
    );
  }
}
