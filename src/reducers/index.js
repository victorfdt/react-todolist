import { combineReducers } from 'redux'
import TodoListReducer from './TodoListReducer';
import JobReducer from './JobReducer';
import AuthReducer from './AuthReducer';

export default combineReducers({
    todos: TodoListReducer,
    jobs: JobReducer,
    auth: AuthReducer
});