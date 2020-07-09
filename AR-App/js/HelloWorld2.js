//gas

"use strict";

import React, { Component } from "react";
import { StyleSheet } from "react-native";
import {
  ViroARScene,
  ViroText,
  Viro3DObject,
  ViroAmbientLight,
  ViroSpotLight,
  ViroImage,
  ViroButton,
} from "react-viro";
var createReactClass = require("create-react-class");
var HelloWorld2 = createReactClass({
  getInitialState() {
    return {
      text: "Initializing AR...",
    };
  },

  render: function () {
    return (
      <ViroARScene onTrackingUpdated={this._onTrackingUpdated}>
        <ViroButton
          source={require("./res/jupiter.png")}
          gazeSource={require("./res/jupiterFact.png")}
          position={[0, -0.5, -2]}
          height={1}
          width={1}
          onGaze={this._onButtonGaze}
        />

        <ViroButton
          source={require("./res/saturn.png")}
          gazeSource={require("./res/saturnFact.png")}
          position={[-4, 1, -5]}
          height={2.5}
          width={2.5}
          onGaze={this._onButtonGaze}
        />

        <ViroButton
          source={require("./res/uranus.png")}
          gazeSource={require("./res/uranusFact.png")}
          position={[2, 2.5, -5]}
          height={1.5}
          width={1.5}
          onGaze={this._onButtonGaze}
        />
      </ViroARScene>
    );
  },

  //outside of render method

  _onButtonGaze() {
    this.setState({
      buttonStateTag: "onGaze",
    });
  },
});

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: "Arial",
    fontSize: 50,
    color: "#ffffff",
    textAlignVertical: "center",
    textAlign: "center",
  },
});

module.exports = HelloWorld2;
