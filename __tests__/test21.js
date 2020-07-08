import React from 'react';
import {render, fireEvent} from 'react-native-testing-library';
import App from '../App.js';

describe('App', () => {
    describe('check to see if if we can navigate to HomePage', () => {
      it('check to see if if we can navigate to HomePage', () => {
        const {getByTestId} = render(<App />);
        fireEvent.press(getByTestId('SplashPageLogoButton'));
        expect(getByTestId('HomePageGasGiantImage')).toBeTruthy();
      });
    });
  });