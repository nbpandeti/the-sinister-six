import Home from '../components/Home.js';
import React from 'react';
import {render, fireEvent} from 'react-native-testing-library';

describe('Home', () => {
  describe('check if Home Page button to ARWorld1 exists', () => {
    it('checks to see if Home Page button to ARWorld1 exist', () => {
      const {getByTestId} = render(<Home />);
      expect(getByTestId('HomePageButtonToARWorld3')).toBeTruthy();

    });
  });
});




 