import axios from "axios";

const AuthActionType = {
    REGISTER_SUCCESS: "REGISTER_SUCCESS",
    REGISTER_FAIL: "REGISTER_FAIL",
    LOGOUT_SUCCESS: "LOGOUT_SUCCESS",
    LOGOUT_FAIL: "LOGOUT_FAIL",
    LOGIN_SUCCESS: "LOGIN_SUCCESS",
    LOGIN_FAIL: "LOGIN_FAIL",
};

const RegisterAuthAction = (userState, history, setErrorHandler) => {
    return async (dispatch) => {
        try {
            const res = await axios.post("", userState);
            const { data } = res;
            dispatch({ type: AuthActionType.REGISTER_SUCCESS, payload: data });
            history.push('/');
        } catch (error) {
            if (error.response) {
                console.log(error.response)
                dispatch({
                    type: AuthActionType.REGISTER_FAIL,
                    payload: error.response.data.email[0],
                });
            }
            setErrorHandler({hasError: true, message: error.response.data.email[0]})
        }
    };
};

const LoginAuthAction = (loginState, history, setErrorHandler) => {
    return async (dispatch) => {
        try {
            const res = await axios.post("", loginState);
            const { data } = res;
            dispatch({ type: AuthActionType.LOGIN_SUCCESS, payload: data });
            history.push('/');
        } catch (error) {
            if (error.response) {
                dispatch({
                    type: AuthActionType.LOGIN_FAIL,
                    payload: error.response.data.non_field_errors[0],
                });
            }
            setErrorHandler({hasError: true, message: error.response.data.non_field_errors[0]})
        }
    };
};

const LogOutAuthAction = (history) => {
    return async (dispatch) => {
        dispatch({
            type: AuthActionType.LOGOUT_SUCCESS,
            payload: "로그아웃되었습니다."
        })
        history.push("/");
    };
};

export {
    AuthActionType,
    RegisterAuthAction,
    LogOutAuthAction,
    LoginAuthAction,
};