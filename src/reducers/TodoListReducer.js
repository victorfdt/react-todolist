let initialState = [ {name: 'Wake up'}, {name: 'Make the bed'}];
//two parameters: initial state (array, in this case), actions
const TodoListReducer = (state = initialState, action ) => {
    
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                { name: action.name }
                ]
        case 'CLEAR_TODO':
            return []
        case 'DELETE_TODO':
            return state.filter((item, index) => item.name !== action.name)
        default:
            return state
    }
    
}

export default TodoListReducer;