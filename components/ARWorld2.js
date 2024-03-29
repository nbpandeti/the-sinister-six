import React, { Component } from 'react';
import { Button, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';

import styles from "./Styles"

export default class ARWorld2 extends Component {
    render() {
        return (
            <View >
                <Image source={require('./images/space.jpg')} style={styles.backgroundImage} />
                <TouchableOpacity testID="ARWorld2ButtontoARWorld3" activeOpacity={0.5} onPress={() => this.props.navigation.navigate('ARWorld3')}>
                    <Image
                        testID="ARWorld2Image"
                        source={require('./images/neworld.png')}
                        style={{
                            height: '90%',
                            width: 500, top: 125
                        }}
                    />
                    <Text testID="ARWorld2Text" style={styles.titlepage}>A star... lol get it? </Text>
                </TouchableOpacity>
            </View>
        )
    }
}