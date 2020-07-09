import HomePage from '../components/Home.js';
import React from 'react';
import {render, fireEvent} from 'react-native-testing-library';

describe('HomePage', () => {
  describe('check if Home Page button to ARWorld 2 exists', () => {
    it('checks to see if Home Page button to ARWorld 2 exist', () => {
      const {getByTestId} = render(<HomePage />);
      expect(getByTestId('HomePageButtonToARWorld2')).toBeTruthy();

    });
  });
});




