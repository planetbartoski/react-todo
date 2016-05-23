import React from 'react';
import { shallow } from 'enzyme';
import { should } from 'chai'; should();
import AboutPage from './AboutPage';

describe('<AboutPage />', () => {
	it('should have a header called \'About\'', () => {
    const wrapper = shallow(<AboutPage />);
    
    wrapper.find('h2').text().should.be.equal('About');
	});
});
