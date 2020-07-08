import HomePage from '../components/Home.js';
import React from 'react';
import {render, fireEvent} from 'react-native-testing-library';

describe('HomePage', () => {
  describe('check if Home Page gas giant text exists', () => {
    it('checks to see if Home Page gas giant text exist', () => {
      const {getByTestId} = render(<HomePage />);
      expect(getByTestId('HomePageButtonToARWorld')).toBeTruthy();

    });
  });
});




