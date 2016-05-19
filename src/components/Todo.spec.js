import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import Todo from './Todo';

describe('<Todo />', () => {
  const onClick = () => true;
  const completed = true;
  const text = 'one';

	it('is a list element', () => {
    const wrapper = shallow(<Todo 
                              onClick={onClick}
                              completed={completed}
                              text={text}
                            />);

    expect(wrapper.is('li')).to.be.true;
	});

  it('simulates click event', () => {

    const onClickSpy = sinon.spy();
    const wrapper = shallow(<Todo 
                              onClick={onClickSpy}
                              completed={completed}
                              text={text}
                            />);
    wrapper.simulate('click');
    
    expect(onClickSpy.calledOnce).to.be.true;
  });

  it('is completed', () => {
    const wrapper = shallow(<Todo 
                              onClick={onClick}
                              completed={completed}
                              text={text}
                            />);

    expect(wrapper.hasClass('completed')).to.equal(completed);
  });

  it('contains text', () => {

    const wrapper = shallow(<Todo 
                              onClick={onClick}
                              completed={completed}
                              text={text}
                            />);
    
    expect(wrapper.text()).to.equal(text);
  });
});
