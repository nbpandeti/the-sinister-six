import ARWorld2 from '../components/ARWorld2.js';
import React from 'react';
import {render, fireEvent} from 'react-native-testing-library';

describe('ARWorld2', () => {
  describe('check if ARWorld2 Button exists', () => {
    it('checks to see if ARWorld2 Button exist', () => {
      const {getByTestId} = render(<ARWorld2 />);
      expect(getByTestId('ARWorld2ButtontoARWorld3')).toBeTruthy();

    });
  });
});