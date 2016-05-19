import React from 'react';
import { shallow } from 'enzyme';
import { should } from 'chai'; should();
import sinon from 'sinon';
import Link from './Link';


describe('<Link />', () => {
  const active = true;
  const children = '<p>aa</p>';
  const onClick = () => true;

	it('contains children', () => {
    const wrapper = shallow(<Link
                              active={active} 
                              children={children} 
                              onClick={onClick}
                            />);
    wrapper.text().should.equal(children);
	});

  it('non-active link is clickable', () => {
    const onClickSpy = sinon.spy();
    const wrapper = shallow(<Link
                              active={false} 
                              children={children} 
                              onClick={onClickSpy}
                            />);

    wrapper.is('a').should.be.true;
    wrapper.simulate('click');
    onClickSpy.calledOnce.should.be.true;
  });

  it('active link is not clickable', () => {
    const wrapper = shallow(<Link
                              active={true} 
                              children={children} 
                              onClick={onClick}
                            />);

    wrapper.is('a').should.be.false;
  });
});
