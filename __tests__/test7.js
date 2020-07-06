import React from 'react';
import {render, fireEvent} from 'react-native-testing-library';
import App from '../App.js';

describe('App', () => {
    describe('check to see if logo button is clicked', () => {
      it('check to see if logo button is clicked', () => {
        const {getByTestId} = render(<App />);
        fireEvent.press(getByTestId('homeScreenLogoButton'));
        fireEvent.press(getByTestId('stellarMenuPageButtonToARWorld'));
        fireEvent.press(getByTestId('ARWorldScreenButton'));
        fireEvent.press(getByTestId('ARButtonToARWorld2'));
        expect(getByTestId('ARWorldScreen2Image')).toBeTruthy();


      });
    });
  });