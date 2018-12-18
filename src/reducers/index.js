import { combineReducers } from 'redux'
import TodoListReducer from './TodoListReducer';
import JobReducer from './JobReducer';

export default combineReducers({
    todos: TodoListReducer,
    jobs: JobReducer
});