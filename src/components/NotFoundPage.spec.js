import React from 'react';
import { shallow } from 'enzyme';
import { should } from 'chai'; should();
import notFoundPage from './NotFoundPage';

describe('<NotFoundPage />', function() {

	it('should exist', function() {
    const wrapper = shallow(<notFoundPage />);
    wrapper.should.exist;
	});
});
