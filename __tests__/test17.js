import Contact from '../components/Contact.js';
import React from 'react';
import {render, fireEvent} from 'react-native-testing-library';

describe('ContactUs', () => {
  describe('check if ContactUs Button to FAQ exists', () => {
    it('checks to see if ContactUs Button to FAQ exist', () => {
      const {getByTestId} = render(<Contact />);
      expect(getByTestId('ContactUsButtonToFAQ')).toBeTruthy();

    });
  });
});