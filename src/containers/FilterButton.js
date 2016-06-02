import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions/todoActions';
import { Button } from 'react-bootstrap';

/**
 * mapStateToProps
 *
 * Transforms current state into props
 * @param {object} state - current state
 * @param {object} ownProps - own props
 *
 * Exported to allow testing
 */
export function mapStateToProps(state, ownProps) {
  return {
    disabled: ownProps.filter === state.visibilityFilter
  };
}

/**
 * mapStateToProps
 *
 * Transforms dispatch function into callback props
 * @param {function} dispatch - dispatch function
 * @param {object} ownProps - own props
 *
 * Exported to allow testing
 */
export function mapDispatchToProps(dispatch, ownProps) {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter));
    }
  };
}

/**
 * Export connected Component
 */
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);