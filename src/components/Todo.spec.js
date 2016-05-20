import React from 'react';
import { shallow } from 'enzyme';
import { should } from 'chai'; should();
import sinon from 'sinon';
import Todo from './Todo';

describe('<Todo />', function() {
  const onClick = () => true;
  const completed = true;
  const text = 'one';

	it('is a list element', function() {
    const wrapper = shallow(<Todo 
                              onClick={onClick}
                              completed={completed}
                              text={text}
                            />);

    wrapper.is('li').should.be.true;
	});

  it('simulates click event', function() {

    const onClickSpy = sinon.spy();
    const wrapper = shallow(<Todo 
                              onClick={onClickSpy}
                              completed={completed}
                              text={text}
                            />);
    wrapper.simulate('click');
    
    onClickSpy.calledOnce.should.be.true;
  });

  it('is completed', function() {
    const wrapper = shallow(<Todo 
                              onClick={onClick}
                              completed={completed}
                              text={text}
                            />);

    wrapper.hasClass('completed').should.be.true;
  });

  it('contains text', function() {

    const wrapper = shallow(<Todo 
                              onClick={onClick}
                              completed={completed}
                              text={text}
                            />);
    
    wrapper.text().should.be.equal(text);
  });
});
