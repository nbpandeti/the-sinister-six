import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  PixelRatio,
  TouchableHighlight,
} from 'react-native';

import {
  ViroVRSceneNavigator,
  ViroARSceneNavigator
} from 'react-viro';

/*
 TODO: Insert your API key below
 */
var sharedProps = {
  apiKey:"API_KEY_HERE",
}

// Sets the default scene you want for AR and VR
var InitialARScene = require('./js/HelloWorldSceneAR');
var InitialARScene2 = require('./js/HelloWorld2');
var InitialARScene3 = require('./js/HelloWorld3');
var InitialVRScene = require('./js/HelloWorldScene');

var UNSET = "UNSET";
var VR_NAVIGATOR_TYPE = "VR";

// These need to be different string values.
// XA: One of thesese is needed for each AR WorlD.
var AR_NAVIGATOR_TYPE = "AR";
var AR_NAVIGATOR_TYPE2 = "AR2";
var AR_NAVIGATOR_TYPE3 = "AR3";

// This determines which type of experience to launch in, or UNSET, if the user should
// be presented with a choice of AR or VR. By default, we offer the user a choice.
var defaultNavigatorType = UNSET;

export default class ViroSample extends Component {
  constructor() {
    super();

    this.state = {
      navigatorType : defaultNavigatorType,
      sharedProps : sharedProps
    }
    this._getExperienceSelector = this._getExperienceSelector.bind(this);
    this._getARNavigator = this._getARNavigator.bind(this);
    this._getARNavigator2 = this._getARNavigator2.bind(this);
    this._getARNavigator3 = this._getARNavigator3.bind(this);
    // XA:  Duplicate he line above for each additional ar world.
    this._getVRNavigator = this._getVRNavigator.bind(this);
    this._getExperienceButtonOnPress = this._getExperienceButtonOnPress.bind(this);
    this._exitViro = this._exitViro.bind(this);
  }

  // Replace this function with the contents of _getVRNavigator() or _getARNavigator()
  // if you are building a specific type of experience.
  render() {
    if (this.state.navigatorType == UNSET) {
      return this._getExperienceSelector();
    } else if (this.state.navigatorType == VR_NAVIGATOR_TYPE) {
      return this._getVRNavigator();
    } else if (this.state.navigatorType == AR_NAVIGATOR_TYPE) {
      return this._getARNavigator();
    } else if(this.state.navigatorType == AR_NAVIGATOR_TYPE2) {
      return this._getARNavigator2();
    }else if(this.state.navigatorType == AR_NAVIGATOR_TYPE3) {
      return this._getARNavigator3();
    }
  }

  // Presents the user with a choice of an AR or VR experience
  _getExperienceSelector() {
    return (

      <View style={localStyles.outer} >
        <View style={localStyles.inner} >

  
        {/*XA: DUPLICATE the entire touchable highlight div for each UI Button for a world. 
        Whats different is the variable in parenthesis after onPress*/}
          
      {/*Button 1*/}
          <TouchableHighlight style={localStyles.buttons}

            onPress={this._getExperienceButtonOnPress(AR_NAVIGATOR_TYPE)}
            underlayColor={'#68a0ff'} >

            <Text style={localStyles.buttonText}>Terrestrial</Text>
          </TouchableHighlight>


{/*Button 2*/}
          <TouchableHighlight style={localStyles.buttons}
            onPress={this._getExperienceButtonOnPress(AR_NAVIGATOR_TYPE2)}
            underlayColor={'#68a0ff'} >

            <Text style={localStyles.buttonText}>Gas</Text>
          </TouchableHighlight>
{/*Button 3*/}

          <TouchableHighlight style={localStyles.buttons}
            onPress={this._getExperienceButtonOnPress(AR_NAVIGATOR_TYPE3)}
            underlayColor={'#68a0ff'} >

            <Text style={localStyles.buttonText}>Asteroid</Text>
          </TouchableHighlight>


        </View>
      </View>
    );
  }

  // Returns the ViroARSceneNavigator which will start the AR experience
  _getARNavigator() {
    return (
      <ViroARSceneNavigator {...this.state.sharedProps}
        initialScene={{scene: InitialARScene}} />
    );
  }

    // Returns the ViroARSceneNavigator which will start the AR experience

    _getARNavigator2() {
      return (
        <ViroARSceneNavigator {...this.state.sharedProps}
          initialScene={{scene: InitialARScene2}} />
      );
    }

    _getARNavigator3() {
      return (
        <ViroARSceneNavigator {...this.state.sharedProps}
          initialScene={{scene: InitialARScene3}} />
      );
    }

    //XA: Duplicate above navigator for each secen


  
  // Returns the ViroSceneNavigator which will start the VR experience
  _getVRNavigator() {
    return (
      <ViroVRSceneNavigator {...this.state.sharedProps}
        initialScene={{scene: InitialVRScene}} onExitViro={this._exitViro}/>
    );
  }

  // This function returns an anonymous/lambda function to be used
  // by the experience selector buttons
  _getExperienceButtonOnPress(navigatorType) {
    return () => {
      this.setState({
        navigatorType : navigatorType
      })
    }
  }

  // This function "exits" Viro by setting the navigatorType to UNSET.
  _exitViro() {
    this.setState({
      navigatorType : UNSET
    })
  }
}

var localStyles = StyleSheet.create({
  viroContainer :{
    flex : 1,
    backgroundColor: "black",
  },
  outer : {
    flex : 1,
    flexDirection: 'row',
    alignItems:'center',
    backgroundColor: "black",
  },
  inner: {
    flex : 1,
    flexDirection: 'column',
    alignItems:'center',
    backgroundColor: "black",
  },
  titleText: {
    paddingTop: 30,
    paddingBottom: 20,
    color:'#fff',
    textAlign:'center',
    fontSize : 25
  },
  buttonText: {
    color:'#fff',
    textAlign:'center',
    fontSize : 20
  },
  buttons : {
    height: 80,
    width: 150,
    paddingTop:20,
    paddingBottom:20,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor:'#68a0cf',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  exitButton : {
    height: 50,
    width: 100,
    paddingTop:10,
    paddingBottom:10,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor:'#68a0cf',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  }
});

module.exports = ViroSample
