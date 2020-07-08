import React, { Component } from 'react';
import { Button, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';

import styles from "./Styles"

export default class FAQ extends Component {
  render() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text testID ="FAQScreenTitle">FAQs Page</Text>
            <Button testID ="FAQButtonToHome" title="Go to Home" onPress={() => this.props.navigation.navigate('Home')} />
            <Button testID ="FAQButtonBack" title="Go back" onPress={() => this.props.navigation.goBack()} />
        </View>
    )
  }
}