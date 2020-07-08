import SplashPage from '../components/Splash.js';
import React from 'react';
import {render, fireEvent} from 'react-native-testing-library';

describe('SplashPage', () => {
  describe('check if logo button exists', () => {
    it('checks to see if logo button exist', () => {
      const {getByTestId} = render(<SplashPage />);
      expect(getByTestId('SplashPageLogoButton')).toBeTruthy();

    });
  });
});




