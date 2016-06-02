import React from 'react';
import { shallow } from 'enzyme';
import { should } from 'chai'; should();
import Header from './Header';


describe('<Header />', function() {

  it('Header should exist', function() {
    const wrapper = shallow(<Header/>);
    wrapper.should.exist;
  });
});
