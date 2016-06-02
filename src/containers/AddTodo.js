import React, { PropTypes } from 'react';
import {findDOMNode} from 'react-dom';
import { connect } from 'react-redux';
import { Form, FormGroup, FormControl, Clearfix, Button } from 'react-bootstrap';
import { addTodo } from '../actions/todoActions';

/**
 * The Add Todo Container
 *
 * Renders the Add Todo Form.
 * @param {Function} dispatch - dispatch function
 *
 * Exported to allow testing
 */
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
        <Button type="submit" bsStyle="primary" pullRight={true} bsSize="small">Add</Button>
        <FormGroup controlId="formInlineName">
          <FormControl type="text" placeholder="new todo" ref={node => {
            input = findDOMNode(node);
          }}/>
        </FormGroup>
        <Clearfix/>
      </Form>
    </div>
  );
};

/**
 * Prop Types
 */
AddTodo.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect()(AddTodo);