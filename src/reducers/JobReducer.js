//two parameters: initial state (array, in this case), actions
const TodoListReducer = (state = [], action ) => {
    
    switch (action.type) {
        case 'JOB_LOADED':
            return action.data
        case 'JOB_LOAD_FAIL':
            return state
        default:
            return state
    }
    
}

export default TodoListReducer;