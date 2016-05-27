import React from 'react';
import FilterButton from '../containers/FilterButton';
import { ButtonGroup } from 'react-bootstrap';

/**
 * Selector Component, enables the user to select what Todo items
 * they want to see: All, Active, Completed 
 */
const TodoSelector = () => (
  <ButtonGroup>
    <FilterButton filter="SHOW_ALL">
      All
    </FilterButton>
    <FilterButton filter="SHOW_ACTIVE">
      Active
    </FilterButton>
    <FilterButton filter="SHOW_COMPLETED">
      Completed
    </FilterButton>
  </ButtonGroup>
);

export default TodoSelector;