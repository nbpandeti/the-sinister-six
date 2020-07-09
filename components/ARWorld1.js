import React, { Component } from 'react';
import { Button, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';

import styles from "./Styles"

export default class ARWorld1 extends Component {
    render() {
        return (
            <View >
                <Image source={require('./images/space.jpg')} style={styles.backgroundImage} />
                <TouchableOpacity testID="ARWorld1ButtontoARWorld2" activeOpacity={0.5} onPress={() => this.props.navigation.navigate('ARWorld2')}>
                    <Image
                        testID="ARWorld1ScreenImage"
                        source={require('./images/space1.jpg')}
                        style={{
                            height: '90%',
                            width: 500, top: 125
                        }}
                    />
                    <Text testID="ARWorldScreenText" style={styles.titlepage}>A star... lol get it? </Text>
                </TouchableOpacity>
            </View>
        )
    }
}