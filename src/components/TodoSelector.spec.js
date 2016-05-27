import React from 'react';
import { shallow } from 'enzyme';
import { should } from 'chai'; should();
import TodoSelector from './TodoSelector';


describe('<TodoSelector />', function() {

	it('exists', function() {
    const wrapper = shallow(<TodoSelector/>);
    wrapper.exists;
	});
});
