import React from 'react';
import { shallow } from 'enzyme';
import { should } from 'chai'; should();
import TodoPage from './TodoPage';

describe('<TodoPage />', () => {
	it('should exist', () => {
    shallow(<TodoPage />).should.exist;
	});
});
