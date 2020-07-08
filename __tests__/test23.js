import React from 'react';
import {render, fireEvent} from 'react-native-testing-library';
import App from '../App.js';

describe('App', () => {
    describe('check to see if if we can navigate to ARWorld2', () => {
      it('check to see if if we can navigate to ARWorld2', () => {
        const {getByTestId} = render(<App />);
        fireEvent.press(getByTestId('SplashPageLogoButton'));
        fireEvent.press(getByTestId('HomePageButtonToARWorld'));
        fireEvent.press(getByTestId('ARWorld1ButtontoARWorld2'));
        expect(getByTestId('ARWorld2Image')).toBeTruthy();
      });
    });
  });