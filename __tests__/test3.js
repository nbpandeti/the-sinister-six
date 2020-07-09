import Home from '../components/Home.js';
import React from 'react';
import {render, fireEvent} from 'react-native-testing-library';

describe('ARWorld1', () => {
  describe('check if ARWorld1 image exists', () => {
    it('checks to see if ARWorld1 image exist', () => {
      const component = mount(<Home />);
      setTimeout(() => {
         const {getByTestId} = render(<Home />);
         expect(getByTestId('HomePageButtonToARWorld1')).toBeTruthy();
       }, 3001);

    });
  });
});

/*describe('ARWorld1', () => {
  describe('check if ARWorld1 image exists', () => {
    it('checks to see if ARWorld1 image exist', () => {
      const {getByTestId} = render(<ARWorld1 />);
      expect(getByTestId('ARWorld1ScreenImage')).toBeTruthy();

    });
  });
});
*/



