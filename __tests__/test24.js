import React from 'react';
import {render, fireEvent} from 'react-native-testing-library';
import App from '../App.js';

describe('App', () => {
    describe('check to see if we can navigate to ARWorld3', () => {
      it('check to see if if we can navigate to ARWorld3', () => {
        const {getByTestId} = render(<App />);
        fireEvent.press(getByTestId('SplashPageLogoButton'));
        fireEvent.press(getByTestId('HomePageButtonToARWorld'));
        fireEvent.press(getByTestId('ARWorld1ButtontoARWorld2'));
        fireEvent.press(getByTestId('ARWorld2ButtontoARWorld3'));
        expect(getByTestId('ARWorld3Image')).toBeTruthy();
      });
    });
  });