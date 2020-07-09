import React, { Component } from 'react';
import { Button, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';

import styles from "./Styles"

export default class ARWorld3 extends Component {
    render() {
        return (
            <View >
                <Image source={require('./images/space.jpg')} style={styles.backgroundImage} />
                <TouchableOpacity testID="ARWorld3ButtonToContactUs" activeOpacity={0.5} onPress={() => this.props.navigation.navigate('Contact')}>
                    <Image
                        testID="ARWorld3Image"
                        source={require('./images/space1.jpg')}
                        style={{
                            height: '90%',
                            width: 500, top: 125
                        }}
                    />
                    <Text testID="ARWorld3Text" style={styles.titlepage}>A star... lol get it? </Text>
                </TouchableOpacity>
            </View>
        )
    }
}