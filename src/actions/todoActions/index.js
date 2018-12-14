//Creating action
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    name: text
  };
}

export const clearTodo = () => {
    return {
    type: 'CLEAR_TODO'
  };
}

export const deleteTodo = (todoName) => {
    return {
        type: 'DELETE_TODO',
        name: todoName
    }
}