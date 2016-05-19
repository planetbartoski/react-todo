import React from 'react';
import { shallow } from 'enzyme';
import { should } from 'chai'; should();
import sinon from 'sinon';
import { AddTodo } from './AddTodo';
import { addTodo } from '../actions/todoActions';


describe('AddTodo', () => {
	
  it('has input field', () => {
    const onClickSpy = sinon.spy();
    const wrapper = shallow(<AddTodo
                            dispatch={onClickSpy}
                          />);
    wrapper.find('input').should.have.length(1);
	});

  it('button dispatches an action', () => {
    const onClickSpy = sinon.spy();
    const wrapper = shallow(<AddTodo
                            dispatch={onClickSpy}
                          />);
    wrapper.find('button').simulate('click');
    onClickSpy.calledOnce.should.be.true;
  });

});
