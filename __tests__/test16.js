import Contact from '../components/Contact.js';
import React from 'react';
import {render, fireEvent} from 'react-native-testing-library';

describe('ContactUs', () => {
  describe('check if ContactUs Back Button exists', () => {
    it('checks to see if ContactUs Back Button exist', () => {
      const {getByTestId} = render(<Contact />);
      expect(getByTestId('ContactUsScreenBackButton')).toBeTruthy();

    });
  });
});