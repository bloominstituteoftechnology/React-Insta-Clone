import React from 'react';
import { shallow } from 'enzyme';

import SearchBar from '../NavBar.js';

describe('Search Bar', () => {
    it('should render an input tag', () => {
        const component = shallow(<SearchBar />);
        expect(component.find('input').length).toBe(1);
    });
});