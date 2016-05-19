import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions/todoActions';
import Link from '../components/Link';

export const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
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
)(Link);