import Home from '../components/Home.js';
import React from 'react';
import {render, fireEvent} from 'react-native-testing-library';

describe('Home', () => {
  describe('check if HomeTabButton exists', () => {
    it('checks to see if HomeTabButton exist', () => {
      const {getByTestId} = render(<Home />);
      expect(getByTestId('HomePageButtonToARWorld1')).toBeTruthy();

    });
  });
});




 