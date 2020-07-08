import React, { Component } from 'react';
import { Button, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import styles from "./Styles"
import Home from './Home';

const {width,height}= Dimensions.get("window");

export default class Splash extends Component {
  render() {
      return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }} >
            <Image style= { styles.backgroundImage }/>
            <View>
                <TouchableOpacity
                    testID ="homeScreenLogoButton"
                    activeOpacity={0.5}
                    onPress={() => this.props.navigation.navigate('Home')} >
                    <Image
                        source={require('./images/logofinal.png')}
                        resizeMode='contain'
                        style= {{maxWidth: (width*.65)}}/>
                </TouchableOpacity>
            </View>
        </View>
    );

  }
}

