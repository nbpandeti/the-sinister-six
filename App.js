import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const styles = StyleSheet.create({
    titlepage: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 45,
    },
    red: {
        color: 'red',
    },
    backgroundImage:{
        position: 'absolute',
    },
    ImageIconStyle: {
        padding: 10,
        margin: 5,
        height: 200,
        width: 150,
        resizeMode: 'stretch',
        flexDirection: 'row'
    },
    AppIconStyle: {
            padding: 10,
            margin: 5,
            height: 200,
            width: 1000,
            resizeMode: 'stretch',
            flexDirection: 'row'
        }
});

function HelloWorldApp() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="StellARMenu" component={StellARMenuPage} />
                <Stack.Screen name="ARWorld" component={ARWorldScreen} />
                <Stack.Screen name="ContactUs" component={ContactUsScreen} />
                <Stack.Screen name="FAQs" component={FAQScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Image source={require('./glitter.jpg')} style= { styles.backgroundImage }/>
            <View>
            <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => navigation.navigate("StellARMenu")}>
                <Image
                    source={require('./text2.png')}
                    style= {styles.ImageIconStyle}/>
            </TouchableOpacity>
            </View>
        </View>
    );
}

function StellARMenuPage({ navigation }) {
    return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Image source={require('./glitter.jpg')} style= { styles.backgroundImage }/>
                <View style={{ flexDirection: 'column'}}>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate('ARWorld')}>
                        <Image
                        source={require('./pretty.png')}
                        style={styles.ImageIconStyle}
                        />
                        <Text style={{color:'white', position:"absolute"}}> AR WORLD </Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate('ContactUs')}>
                        <Image
                        source={require('./pretty.png')}
                        style={styles.ImageIconStyle}
                        />
                        <Text style={{color:'white'}}> Contact Us </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
}

function ARWorldScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>AR World</Text>
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    );
}

function ContactUsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Contact Us </Text>
            <Button title="Go back" onPress={() => navigation.goBack()} />
            <Button title="FAQs" onPress={() => navigation.navigate('FAQs')} />
        </View>
    );
}

function FAQScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>FAQs Page</Text>
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    );
}

export default HelloWorldApp;