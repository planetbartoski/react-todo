import React from 'react';
import { shallow } from 'enzyme';
import { should } from 'chai'; should();
import App from './App';


describe('<App />', function() {

	it('App hould exist', function() {
    const wrapper = shallow(<App/>);
    wrapper.should.exist;
	});
});
