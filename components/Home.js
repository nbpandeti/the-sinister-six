/**
 * Hey chicos and chicas, so this file has black holes stacked on top of each other, 
 * i need someone to please change the styling so that there are three black hole images appearing (separately) and they are touchable opacities. Paths are already set up so 
 * it's really just CSS work. 
 * 
 * Thanks! ILY
 */

import React, { Component } from 'react';
import { Button, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';

import styles from "./Styles"
import Splash from './Splash';

const {width,height}= Dimensions.get("window");

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
        <Image source={require('./images/space.jpg')} style= {styles.backgroundImage}/>
        <TouchableOpacity style={{position:'absolute'}}testID ="stellarMenuPageButtonToARWorld" activeOpacity={0.5} onPress={() => this.props.navigation.navigate('Terrestrial Planets')}>
            <Image
            testID = "stellarMenuPageGasGiantImage"
            source={require('./images/gasgiant.png')}
            style={styles.ImageIconStyle}
            />
        </TouchableOpacity>

        <TouchableOpacity style={{position:'absolute', width: 100, height: 100, top:0}}testID ="stellarMenuPageButtonToARWorld2" activeOpacity={0.5} onPress={() => this.props.navigation.navigate('Gas Giants')}>
            <Image
            testID = "stellarMenuPageGasGiantImage2"
            source={require('./images/gasgiant.png')}
            style={styles.ImageIconStyle}
            />
        </TouchableOpacity>

        <TouchableOpacity style={{position:'absolute'}}testID ="stellarMenuPageButtonToARWorld3" activeOpacity={0.5} onPress={() => this.props.navigation.navigate('Asteroid Belt')}>
            <Image
            testID = "stellarMenuPageGasGiantImage3"
            source={require('./images/gasgiant.png')}
            style={styles.ImageIconStyle}
            />
        </TouchableOpacity>

        </View>
    );}
  }
}

