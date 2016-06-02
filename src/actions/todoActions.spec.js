import { should } from 'chai'; should();
import * as ActionCreators from './todoActions';
import * as ActionTypes from '../constants/actionTypes';
import VisibilityFilter from '../constants/VisibilityFilter';

describe('todoActions', function() {

  it('addTodo should create an action to add new todo item', function() {
    const text = 'new todo item';
    const action = ActionCreators.addTodo(text);

    action.should.have.property('type').that.equals(ActionTypes.ADD_TODO);
    action.should.have.property('id').that.be.an('number');
    action.should.have.property('text').that.equals(text);
  });

  it('toggleTodo should create an action to toggle a todo item', function() {
    const id = 0;
    const action = ActionCreators.toggleTodo(id);

    action.should.have.property('type').that.equals(ActionTypes.TOGGLE_TODO);
    action.should.have.property('id').that.equals(id);
  });

  it('setVisibilityFilter should create an action to set the visibility filter', function() {
    const filter = VisibilityFilter.SHOW_COMPLETED;
    const action = ActionCreators.setVisibilityFilter(filter);

    action.should.have.property('type').that.equals(ActionTypes.SET_VISIBILITY_FILTER);
    action.should.have.property('filter').that.equals(filter);
  });
});
