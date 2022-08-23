import { LOGGED_IN, SET_USER } from "./action_type"

const initialState = {
    isAuth: false,
    userInfo: {}
}

function appReducer(state = initialState, action) {
    switch (action.type) {
        case LOGGED_IN:
            return {
                ...state,
                isAuth: action.data
            }
        case SET_USER:
            return {
                ...state,
                userInfo: action.data
            }
        default:
            return state
    }
}

export default appReducer
