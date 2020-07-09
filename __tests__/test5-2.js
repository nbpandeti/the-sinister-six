import HomePage from '../components/Home.js';
import React from 'react';
import {render, fireEvent} from 'react-native-testing-library';

describe('HomePage', () => {
  describe('check if Home Page image for ARWorld 3 exists', () => {
    it('checks to see if Home Page image for ARWorld 3 exist', () => {
      const {getByTestId} = render(<HomePage />);
      expect(getByTestId('HomePageImageWorld3')).toBeTruthy();

    });
  });
});




