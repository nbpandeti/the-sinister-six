import HomePage from '../components/Home.js';
import React from 'react';
import {render, fireEvent} from 'react-native-testing-library';

describe('HomePage', () => {
  describe('check if Home Page image for ARWorld 1 exists', () => {
    it('checks to see if Home Page image for ARWorld 1 exist', () => {
      const {getByTestId} = render(<HomePage />);
      expect(getByTestId('HomePageImageWorld1')).toBeTruthy();

    });
  });
});




