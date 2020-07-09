import Home from '../components/Home.js';
import React from 'react';
import {render, fireEvent} from 'react-native-testing-library';

describe('Home', () => {
  describe('check if Home Page button to ARWorld2 exists', () => {
    it('checks to see if Home Page button to ARWorld2 exist', () => {
      const {getByTestId} = render(<Home />);
      expect(getByTestId('HomePageButtonToARWorld2')).toBeTruthy();

    });
  });
});




 