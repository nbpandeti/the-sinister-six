import FAQ from '../components/FAQ.js';
import React from 'react';
import {render, fireEvent} from 'react-native-testing-library';

describe('FAQ', () => {
  describe('check if FAQ Button To Home exists', () => {
    it('checks to see if FAQ Button To Home exist', () => {
      const {getByTestId} = render(<FAQ />);
      expect(getByTestId('FAQButtonToHome')).toBeTruthy();

    });
  });
});