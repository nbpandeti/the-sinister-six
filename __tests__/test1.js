import HomeScreen from '../App.js';
import StellARMenuPage from '../App.js';
import React from 'react';
import {render, fireEvent} from 'react-native-testing-library';

describe('Homescreen', () => {
  describe('check if logo exists', () => {
    it('checks to see if logo exist', () => {
      const {getByTestId} = render(<HomeScreen />);
      expect(getByTestId('homeScreenLogoButton')).toBeTruthy();

    });
  });
});




 