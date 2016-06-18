import expect from 'expect';
import {authorsFormattedForDropdown} from './selectors';

describe('Author Selectors', () => {
  describe('authorsFormattedForDropdown', () => {
    it('should return author data formatted for use in a dropdown', () => {
      const authors = [
        {id: "a-b", firstName: 'a', lastName: 'b'}, 
        {id: "c-d", firstName: 'c', lastName: 'd'}
      ];

      const expected = [
        {value: "a-b", text: 'a b'}, 
        {value: "c-d", text: 'c d'}
      ];

      expect(authorsFormattedForDropdown(authors)).toEqual(expected);
    });
  });
});