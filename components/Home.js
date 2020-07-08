import React, { Component } from 'react';
import { Button, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';

import styles from "./Styles"

export default class Home extends Component {
  render() {
    return (
        <View>
        <Image source={require('./images/space.jpg')} style= {styles.backgroundImage}/>
            <TouchableOpacity testID ="HomePageButtonToARWorld" activeOpacity={0.5} onPress={() => this.props.navigation.navigate('ARWorld1')}>
                <Image
                testID = "HomePageGasGiantImage"
                source={require('./images/gasgiant.png')}
                style={styles.ImageIconStyle}
                />
                <Image
                testID = "HomePageGiantText"
                source={require('./images/gianttext.png')}
                resizeMode='contain'
                style= {styles.WorldTitles}
                />
            </TouchableOpacity>

        </View>
    )
  }
}

