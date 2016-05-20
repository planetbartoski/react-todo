import React from 'react';
import { shallow, render } from 'enzyme';
import { should } from 'chai'; should();
import TodoList from './TodoList';


describe('<TodoList />', function() {
  const todos = [{
    id: 0,
    completed: false,
    text: 'one'
  },{
    id: 1,
    completed: false,
    text: 'two'
  },{
    id: 2,
    completed: true,
    text: 'three'
  }];

  const onTodoClick = () => true;

	it('is a list element', function() {
    const wrapper = shallow(<TodoList
                              todos = {todos} 
                              onTodoClick={onTodoClick}
                            />);

    wrapper.is('ul').should.be.true;
	});

  it('contains all Todos', function() {
    const wrapper = render(<TodoList
                              todos = {todos} 
                              onTodoClick={onTodoClick}
                            />);

    wrapper.find('li').should.have.length(todos.length);
  });
});
