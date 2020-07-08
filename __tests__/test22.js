import React from 'react';
import {render, fireEvent} from 'react-native-testing-library';
import App from '../App.js';

describe('App', () => {
    describe('check to see if if we can navigate to ARWorld1', () => {
      it('check to see if if we can navigate to ARWorld1', () => {
        const {getByTestId} = render(<App />);
        fireEvent.press(getByTestId('SplashPageLogoButton'));
        fireEvent.press(getByTestId('HomePageButtonToARWorld'));
        expect(getByTestId('ARWorld1ScreenImage')).toBeTruthy();
      });
    });
  });