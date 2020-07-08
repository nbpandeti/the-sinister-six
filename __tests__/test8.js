import ARWorld1 from '../components/ARWorld1.js';
import React from 'react';
import {render, fireEvent} from 'react-native-testing-library';

describe('ARWorld1', () => {
  describe('check if ARWorld1 Button exists', () => {
    it('checks to see if ARWorld1 Button exist', () => {
      const {getByTestId} = render(<ARWorld1 />);
      expect(getByTestId('ARWorld1ButtontoARWorld2')).toBeTruthy();

    });
  });
});