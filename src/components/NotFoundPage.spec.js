import React from 'react';
import { shallow } from 'enzyme';
import { should } from 'chai'; should();
import notFoundPage from './NotFoundPage';

describe('<NotFoundPage />', () => {
	it('should exist', () => {
    shallow(<notFoundPage />).should.exist;
	});
});
