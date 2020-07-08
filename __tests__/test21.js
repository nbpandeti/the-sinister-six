import React from 'react';
import {render, fireEvent} from 'react-native-testing-library';
import App from '../App.js';

describe('App', () => {
    describe('check to see if logo button is clicked', () => {
      it('check to see if logo button is clicked', () => {
        const {getByTestId} = render(<App />);
        fireEvent.press(getByTestId('SplashPageLogoButton'));
        fireEvent.press(getByTestId('HomePageButtonToARWorld'));
        fireEvent.press(getByTestId('ARWorld1ButtontoARWorld2'));
        fireEvent.press(getByTestId('ARWorld2ButtontoARWorld3'));
        fireEvent.press(getByTestId('ARWorld3ButtonToContactUs'));
        fireEvent.press(getByTestId('ContactUsButtonToFAQ'));
        expect(getByTestId('FAQScreenTitle')).toBeTruthy();


      });
    });
  });