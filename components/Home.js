/**
 * Hey chicos and chicas, so this file has black holes stacked on top of each other, 
 * i need someone to please change the styling so that there are three black hole images appearing (separately) and they are touchable opacities. Paths are already set up so 
 * it's really just CSS work. 
 * 
 * Thanks! ILY
 */

import React, { Component } from 'react';
import { Button, Text, View, Image, TouchableOpacity, Dimensions, StyleSheet, ImageBackground  } from 'react-native';

import styles from "./Styles"
import Splash from './Splash';

const {width,height}= Dimensions.get("window");

const styling = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  terraPlanets: {
    width: width/4,
    height: height/4,
  },
  terraPlanetsLabel: {
      top: height/6.5,
      left: width/35,
      width: width/5,
      height: height/6,
  },
  gasGiants: {
    width: width/4,
    height: height/4,
  },
  gasGiantsLabel: {
      top: height/6,
      left: width/30,
    width: width/5,
    height: height/13,
  },
  asteroidBelt: {
    width: width/4,
    height: height/4,
  },
  asteroidBeltLabel: {
      top: height/6.5,
      left: width/45,
    width: width/5,
    height: height/6,
  },
});

export default class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
        timePassed: false,
    };
}

componentDidMount() {
    setTimeout( () => {
        this.setTimePassed();
    },3000);
}

setTimePassed() {
    this.setState({timePassed: true});
}
  render() {
    //if (!this.state.timePassed) {
      return(
        <View>
        <Splash visible=""/>
        <ImageBackground source={require('./images/space.jpg')}  style={{width: width, height: height}}>
            <View style={{flex: 1, alignItems: "center"}}>
            <TouchableOpacity
                testID="HomePageButtonToARWorld1"
                activeOpacity={0.5}
                onPress={() => this.props.navigation.navigate('Terrestrial Planets')}>
                <ImageBackground
                    style={styling.terraPlanets}
                    testID="HomePageImageWorld1"
                    source={require('./images/gasgiant.png')}
                >
                <Image
                    style={styling.terraPlanetsLabel}
                    source={require('./images/terrestrialLabel.png')}/>
                </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity
                            testID="HomePageButtonToARWorld2"
                            activeOpacity={0.5}
                            onPress={() => this.props.navigation.navigate('Gas Giants')}>
                            <ImageBackground
                                style={styling.gasGiants}
                                testID="HomePageImageWorld2"
                                source={require('./images/gasgiant.png')}
                            >
                            <Image
                                style={styling.gasGiantsLabel}
                                source={require('./images/gianttext.png')}/>
                            </ImageBackground>
                        </TouchableOpacity>



            <TouchableOpacity
                testID="HomePageButtonToARWorld3"
                activeOpacity={0.5}
                onPress={() => this.props.navigation.navigate('Asteroid Belt')}>
                <ImageBackground
                    style={styling.asteroidBelt}
                    testID="HomePageImageWorld3"
                    source={require('./images/gasgiant.png')}
                >
                <Image
                    style={styling.asteroidBeltLabel}
                    source={require('./images/asteroidLabel.png')}/>
                </ImageBackground>
            </TouchableOpacity>
            </View>
        </ImageBackground>

        </View>
    );
  }
}

