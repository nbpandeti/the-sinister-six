import FAQ from '../components/FAQ.js';
import React from 'react';
import {render, fireEvent} from 'react-native-testing-library';

describe('FAQ', () => {
  describe('check if FAQ Back Button exists', () => {
    it('checks to see if FAQ Back Button exist', () => {
      const {getByTestId} = render(<FAQ />);
      expect(getByTestId('FAQButtonBack')).toBeTruthy();

    });
  });
});