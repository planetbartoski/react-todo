import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { addTodo } from '../actions/todoActions';

export let AddTodo = ({ dispatch }) => {
  let input = {value:''};

  return (
    <div>
      <form onSubmit={e => {
        if (e) e.preventDefault();
        if (!input.value.trim()) return;
        dispatch(addTodo(input.value));
        input.value = '';
      }}>
        <input ref={node => {
          input = node;
        }} />
        <Button type="submit" bsStyle="primary" bsSize="small">Add Todo</Button>
      </form>
    </div>
  );
};

AddTodo.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect()(AddTodo);