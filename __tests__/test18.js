import FAQ from '../components/FAQ.js';
import React from 'react';
import {render, fireEvent} from 'react-native-testing-library';

describe('FAQ', () => {
  describe('check if FAQ Title exists', () => {
    it('checks to see if FAQ Title exist', () => {
      const {getByTestId} = render(<FAQ />);
      expect(getByTestId('FAQScreenTitle')).toBeTruthy();

    });
  });
});