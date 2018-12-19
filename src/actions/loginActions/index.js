//Creating action
export const login = (data) => {
 return function (dispatch) {
        setTimeout(() => {
            // Yay! Can invoke sync or async actions with `dispatch`
            dispatch(loginSucceed(data))
        }, 2000);
    }

}

const loginSucceed = (data) => {
    return {
        type: 'LOGIN_SUCCEED', 
        data: data
    }
}

const loginFailed = () => {
    return {
        type: 'LOGIN_FAILED'
    }
}

export const logout = () => {
    return {
        type: 'LOGOUT'
    }
}