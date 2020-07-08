import React, { Component } from 'react';
import { Button, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';

import styles from "./Styles"

export default class Home extends Component {
  render() {
    return (
        <View>
        <Image source={require('./images/space.jpg')} style= {styles.backgroundImage}/>
            <TouchableOpacity testID ="stellarMenuPageButtonToARWorld" activeOpacity={0.5} onPress={() => this.props.navigation.navigate('ARWorld1')}>
                <Image
                testID = "stellarMenuPageGasGiantImage"
                source={require('./images/gasgiant.png')}
                style={styles.ImageIconStyle}
                />
                <Image
                testID = "stellarMenuPageGiantText"
                source={require('./images/gianttext.png')}
                resizeMode='contain'
                style= {styles.WorldTitles}
                />
            </TouchableOpacity>

        </View>
    )
  }
}

