import { should } from 'chai'; should();
import { initialState, todos } from './todos';
import { addTodo, toggleTodo } from '../actions/todoActions';


describe('Reducers::todos', function() {

  it('should set initial state by default', function() {
    const action = { type: 'unknown' };

    todos(undefined, action).should.deep.equal(initialState);
  });

  it('should handle ADD_TODO', function() {
    const text = 'new todo item';
    const action = addTodo(text);

    todos(undefined, action).some( t => t.text === text && t.completed === false ).should.be.true;
  });

  it('should handle TOGGLE_TODO', function() {
    const state = todos(undefined, addTodo('item 1'));
    const action = toggleTodo(state[0].id);

    todos(state, action)[0].completed.should.be.true;
  });
});
