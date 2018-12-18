//two parameters: initial state (array, in this case), actions
const TodoListReducer = (state = { data: [], loading: false, error: "" }, action) => {

    switch (action.type) {
        case 'JOB_LOADED':
            return { ...state, data: action.data, loading: false }
        case 'JOB_LOAD_FAIL':
            return { ...state, data: action.data, loading: false, error: "Can't fetch data from server!" }
        case 'JOB_LOADING':

            return { ...state, loading: true }
        default:
            return state
    }

}

export default TodoListReducer;