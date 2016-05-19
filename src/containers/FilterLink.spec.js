import React from 'react';
import { should } from 'chai'; should();
import sinon from 'sinon';
import { mapStateToProps, mapDispatchToProps} from './FilterLink';
import VisibilityFilter from '../constants/VisibilityFilter';
import { setVisibilityFilter } from '../actions/todoActions';


describe('<FilterLink mapStateToProps />', () => {
	
  it('same state and ownProps filter makes it active', () => {
    const state = {visibilityFilter: VisibilityFilter.SHOW_ALL}; 
    const ownProps = {filter: VisibilityFilter.SHOW_ALL};
    
    mapStateToProps(state, ownProps).active.should.be.true;
	});
});

describe('<FilterLink mapDispatchToProps />', () => {

  it('onClick passes action to dispatch', () => {
    const onClickSpy = sinon.spy();
    const ownProps = {filter: VisibilityFilter.SHOW_ALL};
    
    mapDispatchToProps(onClickSpy, ownProps).onClick();
    onClickSpy.calledWith(setVisibilityFilter(ownProps.filter)).should.be.true;
  });
});
