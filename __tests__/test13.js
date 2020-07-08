import ARWorld3 from '../components/ARWorld3.js';
import React from 'react';
import {render, fireEvent} from 'react-native-testing-library';

describe('ARWorld3', () => {
  describe('check if ARWorld3 text exists', () => {
    it('checks to see if ARWorld3 text exist', () => {
      const {getByTestId} = render(<ARWorld3 />);
      expect(getByTestId('ARWorld3Text')).toBeTruthy();

    });
  });
});