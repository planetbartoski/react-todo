import { should } from 'chai'; should();
import sinon from 'sinon';
import { mapStateToProps, mapDispatchToProps} from './FilterButton';
import VisibilityFilter from '../constants/VisibilityFilter';
import { setVisibilityFilter } from '../actions/todoActions';


describe('<FilterButton mapStateToProps />', function() {
	
  it('same state and ownProps filter makes it disable', function() {
    mapStateToProps(
      {visibilityFilter: VisibilityFilter.SHOW_ALL},
      {filter: VisibilityFilter.SHOW_ALL}
    ).should.have.property('disabled').that.be.true;
	});
});

describe('<FilterButton mapDispatchToProps />', function() {

  it('onClick passes action to dispatch', function() {
    const onClickSpy = sinon.spy();
    const ownProps = {filter: VisibilityFilter.SHOW_ALL};
    
    mapDispatchToProps(onClickSpy, ownProps).onClick();
    onClickSpy.calledWith(setVisibilityFilter(ownProps.filter)).should.be.true;
  });
});
