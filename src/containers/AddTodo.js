import React, { PropTypes } from 'react';
import {findDOMNode} from 'react-dom';
import { connect } from 'react-redux';
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import { addTodo } from '../actions/todoActions';

export let AddTodo = ({ dispatch }) => {
  let input = {value:''};

  return (
    <div>
      <Form inline onSubmit={e => {
        if (e) e.preventDefault();
        if (!input.value.trim()) return;
        dispatch(addTodo(input.value));
        input.value = '';
      }}>
        <FormGroup controlId="formInlineName">
          <FormControl type="text" placeholder="new todo" ref={node => {
            input = findDOMNode(node);
          }}/>
        </FormGroup>
        <Button type="submit" bsStyle="primary" pullRight={true} bsSize="small">Add Todo</Button>
      </Form>
    </div>
  );
};

AddTodo.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect()(AddTodo);