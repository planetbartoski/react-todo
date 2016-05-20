import '../tools/testMount';
import React from 'react';
import { shallow, mount } from 'enzyme';
import { should } from 'chai'; should();
import sinon from 'sinon';
import { AddTodo } from './AddTodo';
import * as actionTypes from '../constants/actionTypes';


describe('<AddTodo />', () => {
	
  it('has input field', () => {
    const wrapper = shallow(<AddTodo
                            dispatch={()=>{}}
                          />);
    wrapper.find('input').should.have.length(1);
	});

  it('dont allow to submit empty form', () => {
    const onClickSpy = sinon.spy();
    const wrapper = shallow(<AddTodo
                            dispatch={onClickSpy}
                          />);
    wrapper.find('form').simulate('submit');
    onClickSpy.calledOnce.should.be.false;
  });

  it('form submit dispatches apprioprate action', () => {
    const onClickSpy = sinon.spy();
    const text = 'new todo item';
    const wrapper = mount(<AddTodo
                            dispatch={onClickSpy}
                          />);
    wrapper.find('input').node.value = text;
    wrapper.find('form').simulate('submit');

    let action = onClickSpy.getCall(0).args[0];
    action.should.have.property('type').that.equals(actionTypes.ADD_TODO);
    action.should.have.property('id').that.be.an('number');
    action.should.have.property('text').that.be.equals(text);
  });

});
