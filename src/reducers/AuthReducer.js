//two parameters: initial state (array, in this case), actions
const AuthReducer = (state = {firstName: '', lastName: ''}, action) => {

    switch (action.type) {
        case 'LOGIN_SUCCEED':
            return {...state, firstName: action.data.firstName, lastName: action.data.lastName}
        case 'LOGOUT':
            //I'm updating the state, I'm creating a new one.
            //...state destructorazing
            return {...state, firstName: "", lastName: ""}
        default:
            return state
    }
}

export default AuthReducer;