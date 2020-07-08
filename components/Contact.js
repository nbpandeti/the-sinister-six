import React, { Component } from 'react';
import { Button, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';

import styles from "./Styles.js"

export default class Contact extends Component {
  render() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text testID ="ContactUsScreenTitle">Contact Us </Text>
            <Button testID="ContactUsScreenBackButton" title="Go back" onPress={() => navigation.goBack()} />
            <Button testID="ContactUsButtonToFAQ" title="FAQs" onPress={() => this.props.navigation.navigate('FAQ')} />
        </View>
    )
  }
}