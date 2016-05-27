import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions/todoActions';
import { Button } from 'react-bootstrap';

export const mapStateToProps = (state, ownProps) => {
  return {
    disabled: ownProps.filter === state.visibilityFilter
  };
};

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);