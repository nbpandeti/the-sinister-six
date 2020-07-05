import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  titlepage: {
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'applesdgothicneo-bold',
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
  height: 100,
  width: 100,
  resizeMode: 'stretch',
},
});

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image source={require('./galaxy.jpg')} style= { styles.backgroundImage }/>
        <Text style={styles.titlepage}>StellAR</Text>
        <TouchableOpacity activeOpacity={0.5}>
        <Image
            source={require('./blackhole.png')}
            style={styles.ImageIconStyle}
          />
          <Text style={{color:'white'}}> AR WORLD </Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5}>
        <Image
            source={require('./blackhole.png')}
            style={styles.ImageIconStyle}
          />
          <Text style={{color:'white'}}> AR WORLD </Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5}>
        <Image
            source={require('./blackhole.png')}
            style={styles.ImageIconStyle}
          />
          <Text style={{color:'white'}}> AR WORLD </Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5}>
        <Image
            source={require('./blackhole.png')}
            style={styles.ImageIconStyle}
          />
          <Text style={{color:'white'}}> AR WORLD </Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5}>
        <Image
            source={require('./blackhole.png')}
            style={styles.ImageIconStyle}
          />
          <Text style={{color:'white'}}> AR WORLD </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

