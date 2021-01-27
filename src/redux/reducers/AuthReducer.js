import axios from "axios";
import {AuthActionType} from "../actions/AuthAction";

const authState = {
    isLoggedIn: false,
    user: {
        key: "",
        user_data: {}
    }
}

const getAuthState = () => {
    const auth = localStorage.getItem('auth');
    try {
        const authObj = JSON.parse(auth);
        if (authObj) {
            const {user_data, key} = authObj.user;
            axios.defaults.headers.common["Authorization"] = `token ${key}`;
            return authObj;
        }
        return authState;
    } catch (e) {
        return authState;
    }
}

const newAuth = getAuthState();

const authreducer = (state = newAuth, action) => {
    switch (action.type) {
        case AuthActionType.REGISTER_SUCCESS:
            const newAuthState = {isLoggedIn: true, user: action.payload}
            axios.defaults.headers.common["Authorization"] = `token ${action.payload.key}`;
            localStorage.setItem('auth', JSON.stringify(newAuthState));
            return newAuthState;

        case AuthActionType.LOGIN_SUCCESS:
            const loginAuthState = {isLoggedIn: true, user: action.payload}
            axios.defaults.headers.common["Authorization"] = `token ${action.payload.key}`;
            localStorage.setItem('auth', JSON.stringify(loginAuthState));
            return loginAuthState;

        case AuthActionType.LOGOUT_SUCCESS:
            localStorage.removeItem('auth');
            return authState;

        default:
            return state;
    }
}

export default authreducer;