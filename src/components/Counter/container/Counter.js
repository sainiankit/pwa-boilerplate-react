import { connect } from 'react-redux';
import Counter from '../presentational/Counter';
import { actionTypes } from '../../../constants'

function mapStateToProps(state) {
        return {
                // mapping redux state to component props
                count: state.counter.count,
        };
}

const mapDispatchToProps = dispatch => {
        return {
                // dispatching plain actions, mapped to props
                onClick: () => dispatch({ type: actionTypes.INCREMENT_COUNT }),
        }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);