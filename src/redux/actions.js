import { LOGGED_IN, SET_USER } from "./action_type";

export const set_auth = (data) => (
    {
        type: LOGGED_IN,
        data: data
    }
)

export const set_userInfo = (data) => (
    {
        type: SET_USER,
        data: data
    }
)

