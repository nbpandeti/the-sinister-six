import Contact from '../components/Contact.js';
import React from 'react';
import {render, fireEvent} from 'react-native-testing-library';

describe('ContactUs', () => {
  describe('check if ContactUs Title exists', () => {
    it('checks to see if ContactUs Title exist', () => {
      const {getByTestId} = render(<Contact />);
      expect(getByTestId('ContactUsScreenTitle')).toBeTruthy();

    });
  });
});