import React from 'react';
import FilterButton from '../containers/FilterButton';
import { ButtonGroup } from 'react-bootstrap';

/**
 * Selector Component
 *
 * Enables the user to select what Todo items they want to see: 
 *  - All, 
 *  - Active, 
 *  - Completed. 
 */
const TodoSelector = () => (
  <div className="todoSelectorWrapper">
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
  </div>
);

export default TodoSelector;