import { connect } from 'react-redux';
import Todo from '../presentational/Todo';
import { actionTypes } from '../../../constants'

// Mapping redux state to component props
function mapStateToProps(state) {
        return {
                todoList: state.todo.list,
        };
}

// Dispatching plain actions, mapped to props
function mapDispatchToProps(dispatch) {
        return {
                getTodoList: () => dispatch({ type: actionTypes.GET_TODO_LIST }),
        }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);