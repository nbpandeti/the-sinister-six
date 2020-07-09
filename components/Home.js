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
      width: width/5,
      height: height/6,
  },
  gasGiants: {
    width: width/4,
    height: height/4,
  },
  gasGiantsLabel: {
    width: width/5,
    height: height/13,
  },
  asteroidBelt: {
    width: width/4,
    height: height/4,
  },
  asteroidBeltLabel: {
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
    if (!this.state.timePassed) {
      return(
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Splash/>
    </View>
        );
    }
    else{ 
      return (
        <View>
        <ImageBackground source={require('./images/space.jpg')}  style={{width: width, height: height}}>
            <TouchableOpacity
                style={styling.terraPlanets}
                testID="HomePageButtonToARWorld1"
                //style={{position:'absolute'}}
                activeOpacity={0.5}
                onPress={() => this.props.navigation.navigate('Terrestrial Planets')}>
                <Image
                    style={styling.terraPlanets}
                    testID="HomePageImageWorld1"
                    source={require('./images/gasgiant.png')}
                    //style={styles.ImageIconStyle}
                />
                <Image
                    style={styling.terraPlanetsLabel}
                    source={require('./images/terrestrialLabel.png')}/>
            </TouchableOpacity>

            <TouchableOpacity
                //style={{position:'absolute', width: 100, height: 100, top:0}}
                style={styling.gasGiants}
                testID="HomePageButtonToARWorld2"
                activeOpacity={0.5}
                onPress={() => this.props.navigation.navigate('Gas Giants')}>
                <Image
                    style={styling.gasGiants}
                    testID="HomePageImageWorld2"
                    source={require('./images/gasgiant.png')}
                    //style={styles.ImageIconStyle}
                />
                <Image
                    style={styling.gasGiantsLabel}
                    source={require('./images/gianttext.png')}/>
            </TouchableOpacity>

            <TouchableOpacity
                //style={{position:'absolute'}}
                style={styling.asteroidBelt}
                testID="HomePageButtonToARWorld3"
                activeOpacity={0.5}
                onPress={() => this.props.navigation.navigate('Asteroid Belt')}>
                <Image
                    style={styling.asteroidBelt}
                    testID="HomePageImageWorld3"
                    source={require('./images/gasgiant.png')}
                    //style={styles.ImageIconStyle}
                />
                <Image
                    style={styling.asteroidBeltLabel}
                    source={require('./images/asteroidLabel.png')}/>
            </TouchableOpacity>
        </ImageBackground>

        </View>
    );}
  }
}

