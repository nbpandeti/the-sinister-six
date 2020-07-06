import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
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
        resizeMode:'stretch'
    },
    ImageIconStyle: {
        margin: 5,
        left:35 ,
        height: '100%',
        width: 500,
        bottom:170,
        justifyContent: 'center',
    alignItems: 'center',
          resizeMode: 'stretch'
    },
    AppIconStyle: {
            padding: 10,
            margin: 5,
            height: 500,
            width: 1000,
            resizeMode: 'stretch',
            flexDirection: 'row'
        }
});

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{gestureEnabled:true, gestureDirection:"horizontal"}} headerMode="none" animation="fade" initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="StellARMenu" component={StellARMenuPage} />
                <Stack.Screen name="ARWorld" component={ARWorldScreen} />
                <Stack.Screen name="AR" component={AR} />
                <Stack.Screen name="ARWorld2" component={ARWorldScreen2} />
                <Stack.Screen name="ContactUs" component={ContactUsScreen} />
                <Stack.Screen name="FAQs" component={FAQScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const Stack = createStackNavigator();
const{width,height}= Dimensions.get("window")

function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Image style= { styles.backgroundImage }/>
            <View>
            <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => navigation.navigate("StellARMenu")}>
                <Image
                    source={require('./logofinal.png')}
                    resizeMode='contain'
                    style= {{maxWidth: (width*.65)}}/>
            </TouchableOpacity>
            </View>
        </View>
    );
}

function StellARMenuPage({ navigation }) {
    return (
            <View style={{justifyContent: "center", alignItems: "center" }}>
                <Image source={require('./space.jpg')} style= {{position: 'absolute', resizeMode:'stretch', minHeight:height}}/>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate('ARWorld')}>
                        <Image
                        source={require('./gasgiant.png')}
                        style={styles.ImageIconStyle}
                        />
                        <Image
                        source={require('./gianttext.png')}
                        resizeMode='contain'
                        style= {{maxWidth: (width*.65), maxHeight: (height*.15),  position: 'absolute', top:500, right:100}}
                        />
                    </TouchableOpacity>
    
                </View>
        );
}
function ARWorldScreen({ navigation }) {
    return (
        <View >
                <Image source={require('./space.jpg')} style= {{position: 'absolute', resizeMode:'stretch', minHeight:height}}/>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate('AR')}>
                    <Image
                        source={require('./bad.jpg')}
                        style={{height: '90%',
                        width: 500,}}
                        />
                    <Text style= {StyleSheet.titlepage}>A star... lol get it? </Text>
                    </TouchableOpacity>
    
                </View>
    );
}
function AR({ navigation }) {
    return (
            <View style={{justifyContent: "center", alignItems: "center" }}>
                <Image source={require('./space.jpg')} style= {{position: 'absolute', resizeMode:'stretch', minHeight:height}}/>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate('ARWorld2')}>
                        <Image
                        source={require('./neworld.png')}
                        style={styles.ImageIconStyle}
                        />
                        <Image
                        source={require('./gianttext.png')}
                        resizeMode='contain'
                        style= {{maxWidth: (width*.65), maxHeight: (height*.15),  position: 'absolute', top:500, right:100}}
                        />
                    </TouchableOpacity>
    
                </View>
        );
}

function ARWorldScreen2({ navigation }) {
    return (
        <View >
                <Image source={require('./space.jpg')} style= {{position: 'absolute', resizeMode:'stretch', minHeight:height}}/>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate('ContactUs')}>
                    <Image
                        source={require('./bad.jpg')}
                        style={{height: '90%',
                        width: 500,}}
                        />
                    <Text style= {StyleSheet.titlepage}>A star... lol get it? </Text>
                    </TouchableOpacity>
    
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

export default App;
