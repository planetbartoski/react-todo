import React from 'react';
import { shallow } from 'enzyme';
import { should } from 'chai'; should();
import Footer from './Footer';


describe('<Footer />', function() {

	it('is Footer', function() {
    const wrapper = shallow(<Footer/>);
    wrapper.is('footer').should.be.true;
	});
});
