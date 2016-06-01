import React from 'react';
import { shallow } from 'enzyme';
import { should } from 'chai'; should();
import Header from './Header';


describe('<Header />', function() {

  it('Header hould exist', function() {
    const wrapper = shallow(<Header/>);
    wrapper.should.exist;
  });
});
